import filterSliceReducer from "../store/filterSlice"
import { useAppDispatch, useAppSelector } from '../store/hooks';
import type { FilterValue } from '../types/todo';

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'active', label: 'Actifs' },
  { value: 'completed', label: 'Complétés' },
];

const FilterButtons = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.filter.value);

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 border
            ${currentFilter === filter.value 
              ? 'bg-white text-purple-600 shadow-lg scale-105 border-white' 
              : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/20 hover:scale-105'
            }`}
          onClick={() => dispatch(filterSliceReducer(filter.value))}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
