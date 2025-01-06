import { CopyClipboard } from "./components/CopyClipboard"
import { Grid } from "./components/Grid"
import tailwindconfig from '../public/assets/image.png'

export const App = () => {
  return (
    <main className="container mx-auto px-2 text-white animate-blurred-fade-in animate-duration-1000">
        <header className="py-8 flex flex-col items-center gap-3 text-center">
          <h1 className="font-semibold text-4xl">Tailmotion </h1>
          <p className="text-slate-400">Un plugin para hacer animaciones facilmente con Tailwind CSS!</p>
          <section className="flex flex-col items-center gap-1">
            <p className="text-sm text-slate-600">Intalación:</p>
            <p className="text-sm text-slate-600">1.Instala el plugin</p>
            <CopyClipboard textToCopy="npm i @betodz/tailmotion" />
            <p className="text-sm text-slate-600">2.Agrega el plugin a tu archivo de configuración tailwind.config.js</p>
              <img src={tailwindconfig} alt="" className="aspect-video h-52 rounded-md" />
          </section>
        </header>
        <section>
          <Grid />
        </section>
    </main>
  )
}
