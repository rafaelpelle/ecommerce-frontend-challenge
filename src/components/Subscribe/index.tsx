import { MailIcon, SendIcon } from '@/components';

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <MailIcon />
      <p className="text-xl font-bold my-1">CADASTRE-SE</p>
      <p>
        e fique por dentro das novidades e <strong>promoções</strong>
      </p>

      <div className="form-control mt-4">
        <div className="input-group border-solid border-0 border-b border-black">
          <input
            type="text"
            placeholder="email@exemplo.com.br"
            className="!rounded-none  input focus:outline-none"
          />
          <button className="btn btn-ghost !rounded-none text-black focus:outline-none hidden sm:block">
            CADASTRAR
          </button>
          <button className="btn btn-ghost !rounded-none text-black focus:outline-none block sm:hidden">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
