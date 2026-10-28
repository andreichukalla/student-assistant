import styled from "styled-components";

// Стилізована картка-контейнер
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

  /* Завдання 3: Плавна зміна кольору лівої смужки та тіні */
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

  /* Завдання 2: Медіазапит для середніх екранів (до 768px) */
  @media (max-width: 768px) {
    padding: 12px 14px;
    background-color: #23252b; /* Проміжний відтінок фону */
  }

  /* Медіазапит для вузьких мобільних екранів (до 480px) */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 12px;
  }
`;

// Стилізований текст назви завдання
const TaskTitle = styled.span`
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  opacity: ${(props) => (props.$completed ? 0.6 : 1)};
  font-weight: 500;
`;

// Стилізована позначка терміновості
const UrgentBadge = styled.span`
  color: #e63946;
  margin-left: 8px;
  font-weight: bold;
`;

// Стилізований текст пріоритету
const PriorityLabel = styled.span`
  font-size: 0.9em;
  color: #a0a0a0;
`;

function TaskItem({ task }) {
  return (
    <StyledCard $priority={task.priority}>
      <TaskTitle $completed={task.completed}>
        {task.title}
        {task.priority === "high" && <UrgentBadge>[Терміново]</UrgentBadge>}
      </TaskTitle>
      <PriorityLabel> - {task.priority}</PriorityLabel>
    </StyledCard>
  );
}

export default TaskItem;
