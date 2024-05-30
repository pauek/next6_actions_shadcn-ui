import Counter from "@/components/Counter";
import Collapsible from "@/components/Collapsible";

export default function Page() {
  return (
    <main className="p-4">
      <section>
        <h2 className="font-bold">{"<Counter>"}</h2>
        <div className="flex flex-row gap-2">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </section>
      <section>
        <h2 className="font-bold">{"<Collapsible>"}</h2>
        <Collapsible title="Some random paragraph">
          <p>
            asdñkj lsakj dalksdjf laskdf alskdjf laskdjf
            laksdfj laskdjf laskdjf skf
          </p>
        </Collapsible>

        <Collapsible title="Some random paragraph">
          <p>
            asdñkj lsakj dalksdjf laskdf alskdjf laskdjf
            laksdfj laskdjf laskdjf skf asdñkj lsakj
            dalksdjf laskdf alskdjf laskdjf laksdfj laskdjf
            laskdjf skf asdñkj lsakj dalksdjf laskdf alskdjf
            laskdjf laksdfj laskdjf laskdjf skfasdñkj lsakj
            dalksdjf laskdf alskdjf laskdjf laksdfj laskdjf
            laskdjf skfasdñkj lsakj dalksdjf laskdf alskdjf
            laskdjf laksdfj laskdjf laskdjf skfasdñkj lsakj
            dalksdjf laskdf alskdjf laskdjf laksdfj laskdjf
            laskdjf skf
          </p>
        </Collapsible>
      </section>
    </main>
  );
}
