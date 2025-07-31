import "@/node_modules/react-modal-video/css/modal-video.css";
import "../../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { figtree, barlowSemiCondensed } from "@/lib/font";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "SAK Wood",
  description: "Curated selection of meticulously graded premium hardwoods",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${figtree.variable} ${barlowSemiCondensed.variable}`}
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103455031', 'ym');

              ym(103455031, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103455031"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-KHH72PKH" />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
