'use client';

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, SearchManufacturer }: SearchManufacturerProps) => {
	const [query, setQuery] = useState('');

	const filteredManufacturers =
		query === ''
			? manufacturers
			: manufacturers.filter((manufacturer) =>
					manufacturer.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
			  );
	return (
		<div className='search-manufacturer'>
			<Combobox>
				<div className='relative w-full'>
					<Combobox.Button className='absolute top-[14px]'>
						<Image src='./car-logo.svg' alt='Car logo' width={20} height={20} className='ml-4' />
					</Combobox.Button>
					<Combobox.Input
						className='search-manufacturer__input'
						placeholder='Volkswagen'
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}>
						<Combobox.Option>
							{filteredManufacturers.map((manufacturer) => (
								<Combobox.Option
									key={manufacturer}
									className={({ active }) =>
										`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
									}
									value={manufacturer}>
									{manufacturer}
								</Combobox.Option>
							))}
						</Combobox.Option>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
