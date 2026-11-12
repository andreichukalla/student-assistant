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
    ${(props) =>
      props.$priority === "high"
        ? "#e63946"
        : props.$priority === "medium"
          ? "#f4a261"
          : "#2a9d8f"};
  transition:
    border-color 0.4s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    background-color: #23252b;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 12px;
  }
`;

const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

const TaskTitle = styled.span`
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  opacity: ${(props) => (props.$completed ? 0.6 : 1)};
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1.15rem);
`;

const UrgentBadge = styled.span`
  color: #e63946;
  margin-left: 8px;
  font-weight: bold;
`;

const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PriorityLabel = styled.span`
  font-size: 0.9em;
  color: #a0a0a0;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: #e63946;
  border: 1px solid #e63946;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e63946;
    color: #ffffff;
  }
`;

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <StyledCard $priority={task.priority}>
      <TaskContent>
        <Checkbox
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <TaskTitle $completed={task.completed}>
          {task.title}
          {task.priority === "high" && <UrgentBadge>[Терміново]</UrgentBadge>}
        </TaskTitle>
      </TaskContent>
      <ActionsGroup>
        <PriorityLabel>{task.priority}</PriorityLabel>
        <DeleteButton onClick={() => onDelete(task.id)}>Видалити</DeleteButton>
      </ActionsGroup>
    </StyledCard>
  );
}

export default TaskItem;
