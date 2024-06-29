import Cardfordashboard from "@/components/Cardfordashboard";
import React from "react";

export default function page() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <h2>
        Create your new Note, Invitation or Greetings and share to your loved
        ones.
      </h2>
      <section className="">
        <h3>Free notes</h3>
        <div className="">
          <Cardfordashboard
            create={true}
            height="h-[240px] w-[220px] my-6 mx-auto"
          />
        </div>
      </section>
      <section>
        <h3>Colorful notes</h3>
        <div className="flex flex-wrap justify-evenly gap-6 my-6">
          <Cardfordashboard
            bgcolor="gray"
            create={true}
            height="h-[240px] w-[220px] "
            cost={10}
          />
          <Cardfordashboard
            bgcolor="blue"
            create={true}
            height="h-[240px] w-[220px] "
            cost={10}
          />
          <Cardfordashboard
            bgcolor="red"
            create={true}
            height="h-[240px] w-[220px] "
            cost={10}
          />
          <Cardfordashboard
            bgcolor="green"
            create={true}
            height="h-[240px] w-[220px] "
            cost={10}
          />
          <Cardfordashboard
            bgcolor="yellow"
            create={true}
            height="h-[240px] w-[220px] "
            cost={10}
          />
        </div>
      </section>
      <section>
        <h3>Invitation cards</h3>
        <h4>1. Wedding invitaion card templates</h4>
        <div className="flex flex-wrap justify-evenly gap-8 my-6 mx-auto">
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={200}
            bgimage={"wedding_temp1"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={200}
            bgimage={"wedding_temp2"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={200}
            bgimage={"wedding_temp3"}
          />
        </div>
        <h4>2. Birthday invitaion card templates</h4>
        <div className="flex flex-wrap justify-evenly gap-8 my-6 mx-auto">
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={100}
            bgimage={"birthday_temp1"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={100}
            bgimage={"birthday_temp2"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={100}
            bgimage={"birthday_temp3"}
          />
        </div>
        <h4>3. Greeting cards templates for multiple occasions</h4>
        <div className="flex flex-wrap justify-evenly gap-8 my-6 mx-auto">
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={50}
            bgimage={"greeting_temp1"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={50}
            bgimage={"greeting_temp2"}
          />
          <Cardfordashboard
            create={true}
            height="h-[500px] w-[305px]"
            cost={50}
            bgimage={"greeting_temp3"}
          />
        </div>
      </section>
    </main>
  );
}
