import React, { useState, useEffect, useCallback } from "react";
import { Screen, Dialog } from "../../components";
import { useNav } from "../../hooks";
import { List, Item } from "./components/List";
import dayjs from "dayjs";

// TODO: flatlist on web
// TODO: rename item.action to item.title
// TODO: fix refresh scroll jitter
// TODO: re-rendering everything because dialog is same level as list

const infiniteScrollRegeneration = 100;
const editItem: { visible: boolean; item: Item | null } = {
  visible: false,
  item: null
};
export default function Focus() {
  const [modalItemEdit, setModalItemEdit] = useState(editItem);
  const [modalProfile] = useState(false);
  const [modalLogin] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const nav = useNav();

  const generateMoreItems = useCallback(() => {
    const group = [...items];
    for (let i = 0; i < infiniteScrollRegeneration; i++) {
      const lastItem =
        group.length === 0
          ? dayjs()
              .startOf("day")
              .add(2, "day")
              .valueOf()
          : group[group.length - 1].id;
      const next = dayjs(lastItem).subtract(1, "hour");
      const id = next.valueOf();
      group.push({
        action: String(Math.random()) + String(Math.random()),
        dayOfMonth: next.format("D"),
        dayOfWeek: next.format("ddd"),
        hour: next.format("h"),
        id,
        month: next.format("MMM"),
        zone: next.format("a")
      });
    }
    setItems(group);
  }, [items]);

  const handleItemPress = useCallback((item: Item) => {
    setModalItemEdit({ visible: true, item });
  }, []);

  const handleLoad = useCallback(() => {
    if (items.length > 0) {
      return;
    }
    generateMoreItems();
  }, [generateMoreItems, items.length]);

  const handleModalEditBackgroundPress = useCallback(() => {
    setModalItemEdit(state => ({ ...state, visible: false }));
  }, []);

  useEffect(handleLoad, []);

  return (
    <>
      <Screen onLeftPress={nav.to("portfolioLanding")} title="Focus">
        {items.length > 0 && 
          <List
            items={items}
            onItemPress={handleItemPress}
            onEndReached={generateMoreItems}
            onEndReachedThreshold={0.5}
          />
        }
      </Screen>
      {modalItemEdit.visible && 
        <Dialog
          duration={2000}
          testID="editItem"
          title={modalItemEdit.item ? modalItemEdit.item.action : "empty"}
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      }
      {modalProfile && 
        <Dialog
          testID="editItem"
          title="hello"
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      }
      {modalLogin && 
        <Dialog
          testID="editItem"
          title="hello"
          onBackgroundPress={handleModalEditBackgroundPress}
        />
      }
    </>
  );
}