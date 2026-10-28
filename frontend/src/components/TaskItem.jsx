import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  list-style: none;
  background-color: #2a2d34;
  border-left: 4px solid
    ${(props) => (props.$priority === "high" ? "#e63946" : "#2a9d8f")};
`;

function TaskItem({ task }) {
  return (
    <StyledCard $priority={task.priority}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.title}
      </span>
      {task.priority === "high" && (
        <span
          style={{ color: "#e63946", marginLeft: "8px", fontWeight: "bold" }}
        >
          [Терміново]
        </span>
      )}
      <span> - {task.priority}</span>
    </StyledCard>
  );
}

export default TaskItem;
const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  list-style: none;
  background-color: #2a2d34;
  border-left: 4px solid
    ${(props) => (props.$priority === "high" ? "#e63946" : "#2a9d8f")};

  /* Плавний перехід та ефект при наведенні (до ПР № 7) */
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;
