import { Code2, ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";
import LogoLight from "./LogoLight";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 transition-colors duration-300">
                            <Image
                                className="rounded-xl"
                                src="/logo.png"
                                alt="Logo DivisAR"
                                width={50}
                                height={50}
                                priority
                            />
                            <LogoLight />
                            <span className="ml-2 px-2 py-0.5 text-xs font-light tracking-wider text-blue-800 bg-blue-400/50 dark:text-blue-400 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 rounded-full">
                                v2.0.0
                            </span>
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-full md:max-w-xs transition-colors duration-300 break-words">
                            Tu herramienta definitiva para seguir las cotizaciones y realizar conversiones en tiempo real.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider transition-colors duration-300">
                                Avisos
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>
                                    <Link
                                        href="/legales-terminos-condiciones"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words"
                                    >
                                        Legales, Términos y condiciones
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider transition-colors duration-300">
                                Datos provistos por
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>
                                    <a
                                        href="https://dolarapi.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 w-fit"
                                    >
                                        DolarApi <ExternalLink size={12} className="shrink-0" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://argentinadatos.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 w-fit"
                                    >
                                        ArgentinaDatos <ExternalLink size={12} className="shrink-0" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4 max-w-full">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2 transition-colors duration-300">
                            <Code2 size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                            Desarrollado por
                        </h4>

                        <div className="bg-slate-50 dark:bg-[#0F172A] p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300 overflow-hidden">
                            <div className="flex items-center gap-3">
                                <div className="min-w-0"> 
                                    <p className="font-bold text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300 truncate">
                                        Calisaya, Daniel Agustin
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">
                                        Salta, Argentina.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-col gap-2 min-w-0">
                                <a
                                    href="https://www.linkedin.com/in/daniel-calisaya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0a66c2] transition-colors font-medium group break-all"
                                >
                                    <Linkedin
                                        size={14}
                                        className="group-hover:scale-110 transition-transform shrink-0"
                                    />
                                    <span className="truncate">linkedin.com/in/daniel-calisaya</span>
                                    <ExternalLink
                                        size={10}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center transition-colors duration-300">
                        &copy; {currentYear} DivisAR. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}