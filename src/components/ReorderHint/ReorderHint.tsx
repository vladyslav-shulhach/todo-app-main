import styles from "./ReorderHint.module.scss";

function ReorderHint() {
  return (
    <div className={styles.hint}>
      <span>Drag and drop to reorder list</span>
    </div>
  );
}

export default ReorderHint;
