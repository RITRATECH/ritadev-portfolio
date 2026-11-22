"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { label: "name", value: "Rico Saputra" },
  { label: "role", value: "Developer & Security Enthusiast" },
  { label: "focus", value: "Web Development / Cybersecurity" },
  { label: "stack", value: "Next.js · Laravel · Python" },
  { label: "system", value: "Ready to build & explore." },
];

export default function Hero() {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Welcome to RitraDev interactive terminal.",
    "Type 'help' to see available commands.",
  ]);

  const terminalOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminal = terminalOutputRef.current;

    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [terminalOutput]);

  const handleCommand = (input: string) => {
    const cmd = input.trim().toLowerCase();

    if (!cmd) return;
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    let response = "";

    switch (cmd) {
      case "help":
        response =
          "Available commands: help, whoami, ls, date, neofetch, about, skills, projects, achievements, experience, contact, sudo, clear";
        break;
      case "whoami":
        response =
          "Rico Saputra | Developer, Security Enthusiast, IT Infrastructure Practitioner.";
        break;

      case "ls":
        response =
          "about/  skills/  projects/  achievements/  experience/  services/  contact/";
        break;

      case "date":
        response = new Date().toLocaleString("id-ID", {
          dateStyle: "full",
          timeStyle: "medium",
        });
        break;

      case "neofetch":
        response = `
            /\\_/\\\\
            ( o.o )   Rico Saputra
            > ^ <    Developer & Security Enthusiast

        OS       : RitraDev Portfolio
        Role     : Developer
        Focus    : Web Development, Cybersecurity
        Stack    : Next.js, React, Laravel, Python
        Platform : Linux
        Status   : Available for collaboration
        `;
        break;

      case "sudo":
        response =
          "Nice try 😄 Root access is not granted. This portfolio runs in a sandbox.";
        break;

      case "about":
        response =
          "I'm Rico Saputra — a technology enthusiast passionate about building digital products and understanding how technology works beneath the surface.";
        break;

      case "skills":
        response = "Navigating to Skills section...";
        document.getElementById("skills")?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "projects":
        response = "Navigating to Projects section...";
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "achievements":
        response = "Navigating to Achievements section...";
        document.getElementById("achievements")?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "experience":
        response = "Navigating to Experience section...";
        document.getElementById("experience")?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "contact":
        response = "Navigating to Contact section...";
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "clear":
        setTerminalOutput([
          "Terminal cleared successfully.",
          "Type 'help' to see available commands.",
        ]);
        setCommand("");
        return;

      default:
        response = `Command not found: "${cmd}". Type 'help' for available commands.`;
    }

    setTerminalOutput((prev) => [...prev, `> ${cmd}`, response]);
    setCommand("");
  };
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-medium tracking-[0.2em] text-cyan-400">
                DEVELOPER · SECURITY ENTHUSIAST
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Building
              <br />
              <span className="text-cyan-400">secure</span> digital
              <br />
              experiences.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Rico Saputra</span>. I
              build modern web applications, explore cybersecurity, work with
              infrastructure, and turn ideas into practical technology
              solutions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
              >
                Explore My Work ↗
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Contact Me
              </Link>
            </div>

            {/* Specialization */}
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">
                  Web<span className="text-cyan-400">Dev</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Application Development
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  Cyber<span className="text-cyan-400">Sec</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Security Exploration
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  IT<span className="text-cyan-400">Infra</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  System & Networking
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side — Interactive-style Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Terminal Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl" />

            {/* Terminal Window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-black/40">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="font-mono text-xs text-gray-500">
                  rico@ritradev:~
                </span>

                <span className="text-xs text-gray-600">⌘</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 sm:p-8">
                <div className="mb-6 font-mono text-sm">
                  <span className="text-cyan-400">➜</span>{" "}
                  <span className="text-green-400">~</span>{" "}
                  <span className="text-gray-300">whoami</span>
                </div>

                <div className="mb-8">
                  <p className="font-mono text-2xl font-bold text-white">
                    Rico Saputra
                  </p>
                  <p className="mt-2 font-mono text-sm text-gray-500">
                    Developer building, learning & exploring.
                  </p>
                </div>

                {/* Terminal Information */}
                <div className="space-y-4 font-mono text-sm">
                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={line.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="grid grid-cols-[75px_1fr] gap-2"
                    >
                      <span className="text-cyan-400">{line.label}</span>
                      <span className="break-words text-gray-300">
                        {line.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Terminal Output */}
                <div
                  ref={terminalOutputRef}
                  className="mb-5 max-h-40 space-y-2 overflow-y-auto font-mono text-xs sm:text-sm"
                >
                  {terminalOutput.map((line, index) => (
                    <p
                      key={index}
                      className="whitespace-pre-wrap break-words text-gray-400"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Terminal Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(command);
                  }}
                  className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-black/40 px-3 py-3 font-mono text-sm focus-within:border-cyan-400/50"
                >
                  <span className="shrink-0 text-cyan-400">➜</span>

                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowUp") {
                        e.preventDefault();

                        if (commandHistory.length === 0) return;

                        const nextIndex =
                          historyIndex === -1
                            ? commandHistory.length - 1
                            : Math.max(historyIndex - 1, 0);

                        setHistoryIndex(nextIndex);
                        setCommand(commandHistory[nextIndex]);
                      }
                      if (e.key === "ArrowDown") {
                        e.preventDefault();

                        if (historyIndex === -1) return;

                        const nextIndex = historyIndex + 1;

                        if (nextIndex >= commandHistory.length) {
                          setHistoryIndex(-1);
                          setCommand("");
                        } else {
                          setHistoryIndex(nextIndex);
                          setCommand(commandHistory[nextIndex]);
                        }
                      }
                      if (e.key === "Tab") {
                        e.preventDefault();

                        const inputValue = command.trim().toLowerCase();

                        if (!inputValue) return;

                        const availableCommands = [
                          "help",
                          "whoami",
                          "ls",
                          "date",
                          "neofetch",
                          "about",
                          "skills",
                          "projects",
                          "achievements",
                          "experience",
                          "contact",
                          "sudo",
                          "clear",
                        ];

                        const matches = availableCommands.filter((cmd) =>
                          cmd.startsWith(inputValue),
                        );

                        if (matches.length === 1) {
                          setCommand(matches[0]);
                        } else if (matches.length > 1) {
                          setTerminalOutput((prev) => [
                            ...prev,
                            `> ${inputValue}`,
                            `Suggestions: ${matches.join(" | ")}`,
                          ]);
                        } else {
                          setTerminalOutput((prev) => [
                            ...prev,
                            `No command matches "${inputValue}".`,
                          ]);
                        }

                        return;
                      }
                    }}
                    placeholder="Type a command..."
                    className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-gray-600"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Terminal command input"
                  />

                  <span className="shrink-0 animate-pulse text-cyan-400">
                    ▍
                  </span>
                </form>
                {/* Divider */}
                <div className="my-7 border-t border-white/10" />

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Linux",
                    "React",
                    "Next.js",
                    "Python",
                    "Laravel",
                    "Networking",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs">
                  <span className="text-gray-600">~/ritadev</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    All systems ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
