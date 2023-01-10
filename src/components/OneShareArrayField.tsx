import { Buildable, ParMd } from "@daohaus/ui";
import React, { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

export const OneShareArrayField = (props: Buildable<{}>) => {
  const { watch, setValue } = useFormContext();
  const [members, activitymods, startdates] = watch([
    "members",
    "activitymods",
    "startdates",
  ]);
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    console.log("members", members);
    console.log("activitymods", activitymods);
    console.log("startdates", startdates);
    if(!members || !activitymods || !startdates) {
      return
    }
    if (
      members?.length !== activitymods?.length ||
      members?.length !== startdates?.length ||
      activitymods?.length !== startdates?.length
    ) {
      setErrorText("All arrays must be the same length");
      return;
    }
    setErrorText(null);
    setValue(
      "shares",
      members.map(() => "1000000000000000000")
    );
  }, [members, activitymods, startdates]);

  if (!errorText) {
    return null;
  }

  return <ParMd style={{color: "red"}}>{errorText}</ParMd>;
};
