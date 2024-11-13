import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';
import { yearsOfProduction, fuels } from '@/constants';

const HomePage = async ({ searchParams }: HomeProps) => {
	const { manufacturer, year, fuel, limit, model } = searchParams;
	const allCars = await fetchCars({
		manufacturer: manufacturer || '',
		year: year || 2022,
		fuel: fuel || '',
		limit: limit || 10,
		model: model || '',
	});

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<CustomFilter title='fuel' options={fuels} />
						<CustomFilter title='year' options={yearsOfProduction} />
					</div>
				</div>

				{!isDataEmpty ? (
					<section>
						<div className='home__cars-wrapper'>
							{allCars?.map((car, index) => (
								<CarCard car={car} key={index} />
							))}
						</div>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>Oops, no results</h2>
						<p>{allCars.message}</p>
					</div>
				)}
			</div>
		</main>
	);
};

export default HomePage;
