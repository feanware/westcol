import { sedgwick } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Westcol | El Streamer Número Uno de Latinoamérica ",
  description:
    "Westcol se ha consolidado como el streamer número uno de Colombia y de toda Latinoamérica, alcanzando numerosos logros y organizando eventos espectaculares. Ha colaborado en streams con famosos artistas como Arcángel, Nicky Jam, entre otros, marcando un hito en la industria. Esta página es una web no oficial creada por la comunidad de Westcol, dedicada a compartir sus logros y novedades. Es una incitaiva por Feanware",
  keywords:
    "westcol, streamer, twitch, colombia, latinoamérica, stream, gaming, gamer, feanware, kick, stream fighters, west santos fc, w merch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={sedgwick.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
