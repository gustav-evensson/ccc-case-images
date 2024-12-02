import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-fit space-y-10 py-10">
      <div>
        <h3 className="text-xl font-bold mb-2">Om företaget</h3>
        <p className="max-w-2xl mb-4">
          Cat Home AB är ett företag som arbetar med att ge hemlösa och övergivna katter en andra
          chans till ett tryggt och kärleksfullt hem. Företaget bygger kattboenden där katter får
          möjlighet att rehabiliteras och matchas med rätt ägare. Med en helhetslösning som
          inkluderar veterinärvård, beteenderådgivning och eftervård säkerställer KattHarmoni att
          varje katt får en harmonisk övergång till sitt nya hem.
        </p>
        <h3 className="text-xl font-bold mb-2">Värdeord</h3>
        <ul className="mb-4 list-disc list-inside space-y-1">
          <li>Omsorg: Vi sätter alltid kattens välmående i första rummet.</li>
          <li>Gemenskap: Vi bygger broar mellan människor och katter och skapar livslånga band.</li>
          <li>
            Hållbarhet: Vi tror på en framtid där fler katter får hem genom medvetna och hållbara
            lösningar.
          </li>
          <li>
            Ansvarstagande: Vi ser det som vårt ansvar att bidra till en bättre värld för hemlösa
            katter.
          </li>
        </ul>
        <h3 className="text-xl font-bold mb-2">Vision</h3>
        <p className="max-w-2xl mb-4">
          Att skapa en värld där varje katt får möjlighet till ett kärleksfullt och tryggt hem,
          samtidigt som vi inspirerar människor att välja adoption framför köp.
        </p>
      </div>
      <Image src="/colors.svg" alt="colors" width={962} height={541} />
      <Image src="/fonts.svg" alt="fonts" width={962} height={541} />
    </div>
  );
}
