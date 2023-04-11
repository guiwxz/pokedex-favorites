import React from "react";
import ModalDialog from "../../components/ModalDialog";
import { usePokemons } from "../../store/pokemons/usePokemons";
import {
  Container,
  HomeButton,
  ListTab,
  LoadContent,
  TabContent,
  TabItem,
  TabItemLabel,
} from "./pokeList.styles";

import { List } from "../../components/List/list";
import { ListContent } from "./listContent/listContent";
import { FiArrowDown, FiArrowLeft, FiHeart, FiList } from "react-icons/fi";
import { colorPalette } from "../../config/colorPalette";
import { FavoritesType } from "../../store/favorites/favorites.types";
import { useNavigate } from "react-router";
import Button from "../../components/Button";

export const PokeList: React.FC<React.PropsWithChildren> = () => {
  const { fetchPokemons, pokemons, page, setPage } = usePokemons();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState<{
    open: boolean;
    values: any;
    title: string;
    favorite?: boolean;
  }>({
    open: false,
    values: {},
    title: "",
  });

  const [activeTab, setActiveTab] = React.useState<"favoritos" | "todos">(
    "favoritos"
  );

  React.useEffect(() => {
    if (activeTab === "favoritos") {
      setPage(0);
    }
    fetchPokemons({ onlyFavorites: activeTab === "favoritos" });
  }, [activeTab, setActiveTab, page, setPage]);

  const hasContentToLoad = React.useMemo(() => {
    if (pokemons && page * 20 > pokemons.count) {
      return false;
    }
    return true;
  }, [page, setPage, pokemons]);

  return (
    <>
      <HomeButton onClick={() => navigate("/")}>
        <FiArrowLeft size={24} />
        <b>Home</b>
      </HomeButton>

      <Container>
        <ListTab>
          <div style={{ color: `${colorPalette.primary[300]}` }}>
            {pokemons && pokemons.count} pokémons encontrados
          </div>
          <TabContent>
            <TabItem
              active={activeTab === "favoritos"}
              onClick={() => setActiveTab("favoritos")}
            >
              <TabItemLabel>
                <FiHeart
                  fill={
                    activeTab === "favoritos"
                      ? colorPalette.blue[800]
                      : colorPalette.blue[100]
                  }
                />
                Favoritos
              </TabItemLabel>
            </TabItem>

            <TabItem
              active={activeTab === "todos"}
              onClick={() => setActiveTab("todos")}
              data-testid="tab-todos"
            >
              <TabItemLabel>
                <FiList />
                Todos
              </TabItemLabel>
            </TabItem>
          </TabContent>
        </ListTab>
        <List
          data={!!pokemons ? pokemons.results : []}
          listItem={(row: FavoritesType, index) => ({
            component: (
              <ListContent {...row} index={index} setOpenModal={setOpenModal} />
            ),
          })}
        />

        {activeTab === "todos" && hasContentToLoad && (
          <LoadContent>
            <Button
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onClick={() => setPage((page) => page + 1)}
            >
              <FiArrowDown />
              Carregar mais
            </Button>
          </LoadContent>
        )}

        {openModal.open && (
          <ModalDialog
            open={openModal.open}
            title={
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {openModal.title.toUpperCase()}
                {openModal.values.fav && (
                  <FiHeart
                    color={colorPalette.blue[800]}
                    fill={colorPalette.blue[800]}
                  />
                )}
              </div>
            }
            onClose={() => setOpenModal({ open: false, values: {}, title: "" })}
          >
            <div></div>
          </ModalDialog>
        )}
      </Container>
    </>
  );
};
