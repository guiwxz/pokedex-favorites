import { ListGrid, NoContentList } from "./list.styles";

interface ListProps extends React.PropsWithChildren {
  data: Record<string, any>[];
  listItem(
    row: object,
    index: number
  ): {
    component: JSX.Element;
  };
}

export const List: React.FC<ListProps> = ({ data, listItem }) => {
  return (
    <ListGrid>
      {data && data.length > 0 ? (
        data.map((row, index) => {
          const { component } = listItem(row, index);
          return component;
        })
      ) : (
        <NoContentList>Nenhum pokemon capturado...</NoContentList>
      )}
    </ListGrid>
  );
};
