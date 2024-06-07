import { useEffect } from "react";
import translate from "../lib/translate";
import { localStorageService } from "@/services/localStorge.service";

export default function Translation(lan: any) {
  let current_lang = localStorageService.get("ADANI_LANG");
  const lang_file = (lang: any) => {
    return <>{translate(lang)}</>;
  };

  useEffect(() => {
    console.log("testing lang");
  }, [current_lang]);

  console.log("language ---> ", lan);
  return <>{lang_file(lan.lan)}</>;
}
