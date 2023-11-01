"use client";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target)
console.log(formData)
    try {
  
      const response = await fetch('/api', {
          method: 'post',     
          body: formData
      });

      if (!response.ok) {
          throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      alert('Message successfully sent');
  } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
  }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-2 w-full py-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="uppercase text-sm tracking-widest py-2">
            Nome
          </label>
          <input
            id="name"
            name='name'
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="border-2  rounded-xl border-neutral-400 "
            type="text" 
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="uppercase text-sm tracking-widest py-2">
            Telefone
          </label>
          <input
            id="phone"
            name='phone'
            autoComplete="off"
            minLength={9}
            maxLength={20}
            className="border-2 w-full rounded-xl border-neutral-400 "
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className="uppercase text-sm tracking-widest py-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          autoComplete="off"
          required
          minLength={8}
          maxLength={150}
          className="border-2  rounded-xl border-neutral-400"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className="uppercase text-sm tracking-widest py-2">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          autoComplete="off"
          className="border-2  rounded-xl border-neutral-400"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className="uppercase text-sm tracking-widest py-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          minLength={20}
          maxLength={600}
          className="border-2 rounded-xl border-neutral-400"
          rows={10}
        />
      </div>
      <button type="submit" className="p-2 mt-4 rounded-xl border-2 border-neutral-500 text-sm text-indigo-700  bg-neutral-300">
        Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;