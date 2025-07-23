import styles from "./TodoFooter.module.scss"; // reuse filter styles

type Filter = "all" | "active" | "completed";
type Props = {
  filter: Filter;
  setFilter: (value: Filter) => void;
};

const FILTER_OPTIONS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

function TodoFilter({ filter, setFilter }: Props) {
  return (
    <div className={styles.filters}>
      {FILTER_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setFilter(opt.value)}
          className={filter === opt.value ? styles.active : ""}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
