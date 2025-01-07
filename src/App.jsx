import { CopyClipboard } from "./components/CopyClipboard"
import { Grid } from "./components/Grid"
import tailwindconfig from '../public/assets/tailwindconfig.png'

export const App = () => {
  return (
    <main className="container mx-auto px-2 grid grid-rows-a-frc-a text-white animate-blurred-fade-in animate-duration-1000">
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
        <footer className="p-4 flex flex-col gap-2 items-center text-slate-500">
          <a className="hover:text-sky-400" href="https://animation.ibelick.com/" target="_blank">
            Basado en animation.ibelick de Julien Thibeaut
          </a>
          <p>
            Una adaptación de <a className="hover:text-sky-400" href="https://github.com/Beto-Dz" target="_blank">@Beto</a>.
            Siguiendo el tutorial de <a className="hover:text-sky-400 font-semibold" href="https://github.com/midudev">@midudev</a> 
          </p>
        </footer>
    </main>
  )
}
