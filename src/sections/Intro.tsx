import IntroPicture from "@/components/intro/IntroPicture";
import IntroDescription from "@/components/intro/IntroDescription";
import IntroButtons from "@/components/intro/IntroButtons";

export default function Intro() {
  return (
    <section className={"mb-28 max-w-[50rem] text-center sm:mb-0"}>
      <IntroPicture />
      <IntroDescription />
      <IntroButtons />
    </section>
  );
}
