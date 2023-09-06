import { SearchIcon } from '@/components';

export default function SearchForm() {
  return (
    <div className="form-control">
      <div className="input-group bg-black bg-opacity-10 rounded-full">
        <input
          type="text"
          placeholder="Estou procurando por..."
          className="input bg-black text-white placeholder-white bg-opacity-0 focus:outline-none text-sm"
        />
        <button className="btn btn-secondary !rounded-full text-black focus:outline-none text-xs hidden sm:flex">
          BUSCAR
          <SearchIcon />
        </button>
        <button className="btn btn-ghost text-secondary !rounded-full focus:outline-none text-xs flex sm:hidden px-5">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
