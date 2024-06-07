import { useEffect } from "react";
import en_translations from "../../public/locales/en/common.json";
import hi_translations from "../../public/locales/hi/common.json";
import gu_translations from "../../public/locales/gu/common.json";
import { localStorageService } from "@/services/localStorge.service";

function getTranslations(lang: "en" | "hi" | "gu"): any {
  if (lang === "en") {
    return en_translations;
  }
  if (lang === "hi") {
    return hi_translations;
  }
  if (lang === "gu") {
    return gu_translations;
  }
}

export default function translate(lan: any): string {
  try {
    const current_lang = localStorageService.get("ADANI_LANG");

    let langague: any = "en";
    if (current_lang === "en_US") {
      langague = "en";
    }
    if (current_lang === "hi_IN") {
      langague = "hi";
    }
    if (current_lang === "gu_IN") {
      langague = "gu";
    }

    const translations: any = getTranslations(langague);

    // console.log("translations lang $$$$$$$$$$$ ==========>", lan);
    // console.log("translations ==========>", translations);
    // console.log("translations ==========>", translations[lan]);
    // console.log("function translate 1-1-1-1-1-1- ::: ", lan);

    if (translations[lan] !== undefined) {
      return translations[lan];
    } else {
      /// return translations[lan];
      return lan;
    }
  } catch (error) {
    throw new Error(`Unable to get translation content for ${lan}`);
  }
}
