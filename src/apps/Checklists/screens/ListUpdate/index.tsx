import React, { memo, useState } from 'react';
import { Button, Screen, TextInput, Dialog } from '../../../../components';
import { getCurrentChecklist, removeList, updateList } from '../../models';
import { useNav } from '../../../../hooks';
import { useRootSelector, useRootDispatch } from '../../../../utils';
import { navigate } from '../../../../models';

export default memo(function ChecklistUpdate() {
  const nav = useNav();
  const dispatch = useRootDispatch();
  const checklist = useRootSelector(getCurrentChecklist);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [form, setForm] = useState({
    name: checklist.name,
    description: checklist.description || '',
  });
  const isInvalidForm = form.name.trim().length === 0;

  const handleNameChange = (name: string) =>
    setForm((state) => ({ ...state, name }));
  const handleDescriptionChange = (description: string) =>
    setForm((state) => ({ ...state, description }));
  const handleSubmit = () => {
    const { name, description } = form;
    const now = Date.now();
    if (isInvalidForm) {
      return;
    }
    dispatch(
      updateList({
        ...checklist,
        name,
        description,
        updatedAt: now,
      })
    );
    dispatch(navigate('checklists'));
  };

  const handleDelete = () => {
    setShowDeleteDialog(false);
    dispatch(removeList(checklist.id));
    dispatch(navigate('checklists'));
  };

  const handleDeletePress = () => setShowDeleteDialog(true);
  const handleDeleteCancel = () => setShowDeleteDialog(false);

  return (
    <>
      <Screen
        onLeftPress={nav.to('checklists')}
        title={'Update Checklist'}
        gutter
      >
        <TextInput
          title="name"
          value={form.name}
          onChangeText={handleNameChange}
        />
        <TextInput
          title="description"
          value={form.description}
          onChangeText={handleDescriptionChange}
        />
        <Button title="update" onPress={handleSubmit} />
        <Button title="delete" onPress={handleDeletePress} color="danger" />
      </Screen>
      {showDeleteDialog && (
        <Dialog
          title="are you sure?"
          onConfirmButtonPress={handleDelete}
          onBackgroundPress={handleDeleteCancel}
          onCancelButtonPress={handleDeleteCancel}
        />
      )}
    </>
  );
});