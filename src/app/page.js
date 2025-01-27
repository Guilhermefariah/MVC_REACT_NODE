import React from 'react'

export default function Home() {

  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Form MVC</title>
      </header>

      <main>
        <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">Form MVC</h1>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-gray-700 font-medium text-sm"
            >
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 font-medium text-sm"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-gray-700 font-medium text-sm"
            >
              Assunto:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Digite o assunto"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-gray-700 font-medium text-sm"
            >
              Descrição:
            </label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="4"
              placeholder="Digite a descrição"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
