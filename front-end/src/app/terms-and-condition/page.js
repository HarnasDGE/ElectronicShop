import { CtaThird } from "../components/CtaThird";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";
import termsData from "../data/termsData.json";

export default function Home() {
  return (
    <main className="flex-grow">
      <SubPageBar title="Terms And Condition" />
      <WidthWrapper className="py-20">
        <h2>Introduction</h2>
        <p className="ml-8">
          Praesent magna urna, interdum vehicula placerat aliquet, tempus eget
          nisi. Mauris sed malesuada nunc, et hendrerit dolor. Nullam lacus
          orci, pretium sit amet hendrerit ac, condimentum vel ante. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nulla bibendum, magna a porttitor aliquet, nunc ex hendrerit
          erat, in porta eros mi sed urna. Morbi rutrum sodales orci, eget
          accumsan nisi consectetur nec. Vestibulum rhoncus urna et lorem
          faucibus, eu pharetra est consequat. Sed porttitor pulvinar justo et
          blandit. Nulla placerat accumsan neque eu molestie. Integer cursus sit
          amet nulla eget molestie. Nunc nisi tortor.
        </p>
        <ol>
          {termsData.map((term) => (
            <li
              className="list-decimal text-xl ml-5 font-bold"
              key={term.title}
            >
              <h3>{term.title}</h3>
              <p className="ml-8 text-base font-normal">{term.content}</p>
            </li>
          ))}
        </ol>
      </WidthWrapper>
      <CtaThird />
    </main>
  );
}
