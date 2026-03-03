import { Code2, ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";
import LogoLight from "./LogoLight";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-10">
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
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs transition-colors duration-300">
                            Tu herramienta definitiva para seguir las cotizaciones y realizar conversiones en tiempo real.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider transition-colors duration-300">
                            Avisos
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>
                                <Link
                                    href="/legales-terminos-condiciones"
                                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    Legales, Términos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2 transition-colors duration-300">
                            <Code2 size={16} className="text-cyan-600 dark:text-cyan-400" />
                            Desarrollado por
                        </h4>

                        <div className="bg-slate-50 dark:bg-[#0F172A] p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300">
                                        Calisaya, Daniel Agustin
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">
                                        Salta, Argentina.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-col gap-2">
                                <a
                                    href="https://www.linkedin.com/in/daniel-calisaya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0a66c2] transition-colors font-medium group"
                                >
                                    <Linkedin
                                        size={14}
                                        className="group-hover:scale-110 transition-transform"
                                    />
                                    linkedin.com/in/daniel-calisaya
                                    <ExternalLink
                                        size={10}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
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