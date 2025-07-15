type Props = {
  filter: "all" | "active" | "completed";
  setFilter: (value: "all" | "active" | "completed") => void;
};

function TodoFilter({ filter, setFilter }: Props) {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
