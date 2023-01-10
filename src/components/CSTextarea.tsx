import { WrappedTextArea } from "@daohaus/ui";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Noun, handlePluralNoun } from "@daohaus/utils";

export const CSTextarea = (
  props: ComponentProps<typeof WrappedTextArea> & { itemNoun: Noun }
) => {
  const {
    rules,
    id,
    itemNoun = {
      singular: "item",
      plural: "items",
    },
  } = props;
  const { watch } = useFormContext();

  const value = watch(id);
  const amtItems = Array.isArray(value) ? value.length : 0;
  const helperText = `${amtItems} ${handlePluralNoun(
    itemNoun,
    amtItems
  )} typed`;

  const newRules = {
    ...rules,
    setValueAs: (value: string) => value.trim().split(/\r?\n/).filter(Boolean),
  };

  return (
    <WrappedTextArea {...props} rules={newRules} helperText={helperText} />
  );
};
