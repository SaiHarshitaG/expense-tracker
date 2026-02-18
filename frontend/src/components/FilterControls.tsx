interface Props {
  category: string;
  setCategory: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
}

export default function FilterControls({
  category,
  setCategory,
  sort,
  setSort,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">

      <input
        type="text"
        placeholder="Filter by category"
        className="border rounded-lg p-2 w-full md:w-1/2 focus:ring-2 focus:ring-blue-400"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="date_desc">Newest First</option>
      </select>

    </div>
  );
}
