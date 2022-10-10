import React, { useEffect } from 'react'
import CreateComponent from '../commonComps/createComponent'
import bestResults from '../../data/blog/bestresults'
export default function Example(props) {
    const post = () => {


       const postArticle = props.posts.filter((post) => {
            return props.blog === post.id

       })
      return postArticle
    }
    const Benefits = () => {

    return (
        <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-lg font-semibold text-default">Introducing</span>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Collagen for Women | What are the Benefits and Side Effects
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-800">
            Loose and wrinkly skin, chipped nails, thin and dry hairs with split ends are beauty concerns only a woman could understand. Such conditions are not only associated with age, but factors like reduced quality and quantity of collagen play a vital role here.
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-800">
            <p>
            Unfortunately, with age, our bodies lose collagen by 1% annually starting from the late 20s. In the case of women, this percentage increases to 2% per year after menopause. So for women, this means a 30% loss of collagen following the first 5 years of menopause. Thus, consuming collagen supplements becomes all the more necessary for women.
            </p>
            <p>
            Collagen supplements contain amino acids which are the building blocks of proteins. Additionally, they contain added nutrients that are highly effective in maintaining good hair, skin, nail, and bone health.
            </p>
            <p>
            But, it should be noted that <strong>collagen benefits for women</strong> and side effects go side by side. Isn't it strange? I know what you’re thinking, but the good news is collagen consumption has fewer side effects compared to the benefits it provides to women.
            </p>
            <p>
            Yes, it’s true! So let's just jump right into the health benefits of collagen consumption for women.
            </p>
            <h2>Incredible Collagen Benefits For Women</h2>
            <p>
            Should a woman take collagen? Well, yes.  Different studies have shown that collagen consumption benefits women in maintaining bone, skin, hair, nails, cartilage, and digestive system health.
            </p>
            <p>
            It's time to get into the details!
            </p>
            <ol role="list">
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Strengthens Joints</p>
                <p>To begin with, collagen plays quite an important role in strengthening your joints. As you know that your articular cartilage contains collagen which is a necessary component that keeps your joints flexible, allowing smooth movements. However, with age articular cartilage eventually depletes. This results in joint aches and pains because of the wear and tear caused by continuous rubbing of joints against each other. In addition, your collagen level is also being depleted, your joints suffer considerably.</p>
                <p>In the case of women, these conditions are more prevalent, especially after menopause given that their collagen production depletes significantly. Therefore, <strong>collagen supplements for women</strong> improve articular cartilage, allowing mobility and comfort in joints.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Strengthens Bones</p>
                <p>In addition to keeping the joints healthy, collagen also helps in keeping the bones in good shape. Following a few years of menopause, a woman’s bone density gradually changes because of the decreased estrogen levels. Therefore women are more prone to bone-related issues. Consuming collagen positively impacts bone health.</p>
                <p>Moreover, research indicates that athletic women who experienced knee pain during their practice sessions showed promising recovery results after consuming collagen for 12 weeks. Furthermore, daily consumption of type 1 collagen can help in making the bones denser as well as aid in the production of new bones.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Skin Health</p>
                <p>Skin health is not a gender-restricted concern. But, women are more likely to experience skin-related issues because of the drastic decrease in their collagen levels, especially after menopause. The decreased collagen production results in the skin becoming dryer and thinner. <strong>Collagen supplements for menopause</strong>, overcome such conditions and enhances skin health, as it has moisturizing properties.</p>
                <p>In addition to this, collagen is also beneficial for women during and after pregnancy. It is because a woman’s body undergoes hormonal changes during and after pregnancy. This softens their collagen fibers, causing the skin to become loose and, in most cases, causing stretch marks.</p>
                <p>Moreover, it is also effective against UV-Induced photoaging of the skin. According to a study published in the <a href="https://pubmed.ncbi.nlm.nih.gov/29949889/">National Library of Medicine</a>, 64 women who had skin-related issues such as wrinkling, dehydration, and inelasticity took collagen peptides for 12 weeks. Consequently, they experienced considerable improvements.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Hair Health</p>
                <p>Another benefit of consuming collagen-enriched supplements is that it helps women in enhancing their hair health along with improving hair texture. Hairs are primarily composed of keratin, a protein found in collagen. Since keratin production is associated with collagen, consuming collagen eventually helps in rebuilding hair as well as fighting against free radicals, resulting in improved scalp health.</p>

            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Nails Health</p>
                <p>Aside from the benefits collagen has on a woman’s hair, it has also shown positive results in maintaining nail health. Most women experience broken or chipped nails because of lower collagen levels. According to a study, women who consumed collagen supplies not only showed signs of healthier nails but also reported faster nail growth.</p>

            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Digestive Health</p>
                <p>Two of the noteworthy amino acids produced by collagen consumption are glutamine and glycine. Glutamine is quite effective when it comes to maintaining digestive health in women as it reduces inflammation of the intestinal wall. In addition to this, glycine is also quite effective when it comes to supporting the stomach lining in females.</p>

            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Supplements May Improve Muscle Growth</p>
                <p>According to research, women who were undergoing premenopausal stage and did resistance training for 12 weeks consumed about 15 grams of collagen supplements per day. As a result, they showed significant improvements in their fat-free body mass. Besides this, they also experienced improvements in their leg strength and hand grip.</p>

            </li>

          </ol>
          <h3 style={{fontSize: "26px", fontWeight:"bold"}}>Side Effects Associated With Collagen For Women</h3>
            <p>
            Although collagen supplements are well absorbed, it is always better to practice caution. It is possible to experience mild side effects such as bloating, heartburn, and a feeling of fullness when consuming collagen supplements. Below appended are a few of the side effects women could experience as a result of collagen consumption.
            </p>

            <ol role="list">
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Common Food Allergies</p>
                <p>To begin with, it should be noted that collagen supplements are primarily made from animal sources, mostly from fish, beef, pork, and chicken skin. Therefore, if you are a vegan, or are allergic to such foods, you should avoid taking collagen supplements. For example, most people are allergic to marine food. So, on consuming collagen supplements, they may experience allergies.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Liver Fibrosis</p>
                <p>Another potential side effect consumption of collage could have is liver fibrosis. The condition primarily occurs as a result of excessive accumulation of proteins, and collagen is one of them. The condition could worsen and turn into cirrhosis or liver failure if not dealt with urgently.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Digestive System Related Issues</p>
                <p>Studies indicate that some women may experience mild problems in their digestive system after consuming collagen. Their stomach might become upset, along with experiencing an unpleasant taste in their mouth. This mostly occurs as a result of the additives that are included in the collagen supplements or the brand formula of a particular collagen supplement.</p>
            </li>


          </ol>
          <h4 style={{fontSize:'24px', fontWeight:'bold'}}>Conclusion</h4>
            <p>
            <strong>Collagen benefits for women</strong>are numerous ranging from maintaining hair and nail health to strengthening their bones and joints. However, women might experience some side effects that include allergies, and an upset digestive system. Although these side effects are mild, it is always important to consult a physician before you decide to take collagen supplements.
            </p>

          </div>
        </div>
      </div>
    )
    }
    const KneePain = () => (
        <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-lg font-semibold text-default">Introducing</span>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Does Collagen Cure Knee Pain? | Collagen for Joints
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-800">
            A considerable ratio of people suffer from knee pain daily and there could be a variety of reasons for it. Knee pain could occur because of an acute injury or by regular wear and tear in the joints. Either way, it is something that can be quite unpleasant and restrict smooth movements.
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-800">
            <p>
            The knee is a complex joint since it comprises different muscles and ligaments. One such example is cartilage, which is a tough, elastic, and flexible connective tissue found between the bones. Cartilage serves the purpose of reducing friction, and wear and tear between joints, resulting in smooth movements. It consists of cartilage cells that produce multiple proteins, mainly collagen.
            </p>
            <p>
            Therefore, <strong>collagen for knees</strong> plays a vital role here. It is because it provides most biomechanical properties of the extracellular matrix ensuring smooth functioning of joints and tissue regeneration.
            </p>
            <p>
            So you might be thinking, <strong>can collagen cure knee pain</strong>? Well, yes it can.

            </p>

            <h2>Collagen For Knees: How Does It Help?</h2>
            <p>
            To begin with, Type 2 collagen is the primary component of human articular cartilage. It is the tissue covering the end of the bones allowing smooth movements against each other. However, as you age, the articular cartilage gradually deteriorates. As a result, the bone to bone contact increases and causes discomfort or pain around the knee.
            </p>
            <p>
            In addition, due to continuous wear and tear caused by the rubbing of bones against each other, they become brittle and weak. This is where collagen supplements for knees come in as they contain amino acids that are quite effective when it comes to rebuilding the cartilage.
            </p>
            <p>
            A study published in the <a href="https://pubmed.ncbi.nlm.nih.gov/18416885/">National Library of Medicine</a>, states that athletes who particularly experienced activity related pain in the knees were given collagen supplements. Consequently, they showed significant improvements in their joint pain. Moreover, a similar study showed considerable improvements in knee pain of young athletes when treated with bioactive collagen peptides. So, <strong>is collagen good for knee pain</strong>? Yes, Indeed.
            </p>
            <ol className="list-none">
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Benefits Of Collagen For Other Joints</p>
                <p>So, collagen is beneficial for knees, but does collagen help joints besides knees? Well, let me tell you that consumption of collagen enriched supplements is not only beneficial for knees but for every other joint in our bodies. A study published at <a href="https://www.scielo.br/j/rbgg/a/fk95TfhxB7mPsmqYRDdHH8K/?lang=en">Sci Flo Brazil</a> states that collagen supplements are effective against increasing mineral bone density, and providing relief in joint pain. Besides this, individuals who were administered with a daily dosage of 12g of collagen supplements showed a vivid improvement in osteoarthritis and osteoporosis.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen And Arthritis Aches</p>
                <p>Besides dealing with basic joint pain, collagen is also effective against medical conditions such as arthritis. According to research published at <a href="http://blog.arthritis.org/living-with-arthritis/collagen-supplements-helpful-arthritis/">Arthritis Foundation</a>, collagen can possibly overcome various arthritis pains. Upon consumption of collagen enriched supplements, individuals who experienced osteoarthritis experienced increased mobility, as well as reduced stiffness and pain.</p>
                <p>In addition to this, another study conducted in 2019 revealed that individuals with rheumatoid arthritis showed improvement in joint pain, stiffness, joint tenderness and swelling after consuming the oral collagen supplements. Therefore, it's safe to say that consumption of collagen supplements help in overcoming joint pain, stiffness, and swelling.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>How Does Collagen Work?</p>
                <p>Whether ingested in the form of supplements or gained through foods such as eggs, animal skin, or bone broth, collagen gets broken down into amino acids. The body combines these components again in order to produce collagen from them. It is true that this process slows down with age which is quite disappointing.</p>
            </li>
            <li>
                <p style={{fontSize:"22px", fontWeight: 'bold'}}>Natural And Supplemental Collagen</p>
                <p>Considering how the process works, you might question what is the most effective way of consuming collagen? Let me guide you through. First, you should know that our bodies have no way of distinguishing whether collagen is being consumed through our natural diet, or via supplements.</p>
                <p>So, if you are interested in increasing your collagen consumption naturally, then the best way to do so is through choosing a diet that is rich in collagen. For example, bone broth, chicken or fish skin, or foods that are enriched with vitamin C. However, if you intend to consume it in supplementary form, you have a wide range of products to choose from.</p>
                <p>Collagen comes in powdered, pills, gummy, liquid, and cream forms. In this case, one of the best available options is hydrolyzed collagen, since it is easier for your tissues to absorb. On top of that, it provides your body with the right amount of amino acids accurately as per its requirements. Just to let you know, regardless of their form or source, amino acids are indeed beneficial.</p>

            </li>


          </ol>

          <h3 style={{fontSize:'24px', fontWeight:'bold'}}>Final Verdict</h3>
            <p>
            So, <strong>does collagen help cracking joints</strong>? Considering the prevalence of joint related issues, it is vital that you monitor your daily intake of proteins and amino acids. It is because joint related problems are mainly caused by collagen deficiency. With age, the cartilage weakens naturally resulting in the bones becoming brittle as they continuously rub against each other. Consequently, you experience discomfort and pain in joints, which in most cases, can lead to severe joint related issues such as osteoarthritis or osteoporosis.
            </p>
            <p>Therefore, either through supplements or through a natural diet, you should ensure that you intake a balanced amount of collagen. In the long run, it will improve your bone health by making your cartilage flexible, and strong while rebuilding it. Collagen supplements help in tightening your muscles and tendons. The ultimate goal here is to hold your joints together. The factor of age in this case is indeed troubling. However, using collagen supplements can help you overcome it.</p>
          </div>
        </div>
      </div>
    )
    const Hair = () => {

      return (
          <div className="relative overflow-hidden bg-white py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
            <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
              <svg
                className="absolute top-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
              </svg>
              <svg
                className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
              </svg>
              <svg
                className="absolute bottom-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="block text-center text-lg font-semibold text-default">Introducing</span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Collagen for Women | What are the Benefits and Side Effects
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-800">
              Loose and wrinkly skin, chipped nails, thin and dry hairs with split ends are beauty concerns only a woman could understand. Such conditions are not only associated with age, but factors like reduced quality and quantity of collagen play a vital role here.
              </p>
            </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-800">
              <p>
              Unfortunately, with age, our bodies lose collagen by 1% annually starting from the late 20s. In the case of women, this percentage increases to 2% per year after menopause. So for women, this means a 30% loss of collagen following the first 5 years of menopause. Thus, consuming collagen supplements becomes all the more necessary for women.
              </p>
              <p>
              Collagen supplements contain amino acids which are the building blocks of proteins. Additionally, they contain added nutrients that are highly effective in maintaining good hair, skin, nail, and bone health.
              </p>
              <p>
              But, it should be noted that <strong>collagen benefits for women</strong> and side effects go side by side. Isn't it strange? I know what you’re thinking, but the good news is collagen consumption has fewer side effects compared to the benefits it provides to women.
              </p>
              <p>
              Yes, it’s true! So let's just jump right into the health benefits of collagen consumption for women.
              </p>
              <h2>Incredible Collagen Benefits For Women</h2>
              <p>
              Should a woman take collagen? Well, yes.  Different studies have shown that collagen consumption benefits women in maintaining bone, skin, hair, nails, cartilage, and digestive system health.
              </p>
              <p>
              It's time to get into the details!
              </p>
              <ol role="list">
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Strengthens Joints</p>
                  <p>To begin with, collagen plays quite an important role in strengthening your joints. As you know that your articular cartilage contains collagen which is a necessary component that keeps your joints flexible, allowing smooth movements. However, with age articular cartilage eventually depletes. This results in joint aches and pains because of the wear and tear caused by continuous rubbing of joints against each other. In addition, your collagen level is also being depleted, your joints suffer considerably.</p>
                  <p>In the case of women, these conditions are more prevalent, especially after menopause given that their collagen production depletes significantly. Therefore, <strong>collagen supplements for women</strong> improve articular cartilage, allowing mobility and comfort in joints.</p>
              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Strengthens Bones</p>
                  <p>In addition to keeping the joints healthy, collagen also helps in keeping the bones in good shape. Following a few years of menopause, a woman’s bone density gradually changes because of the decreased estrogen levels. Therefore women are more prone to bone-related issues. Consuming collagen positively impacts bone health.</p>
                  <p>Moreover, research indicates that athletic women who experienced knee pain during their practice sessions showed promising recovery results after consuming collagen for 12 weeks. Furthermore, daily consumption of type 1 collagen can help in making the bones denser as well as aid in the production of new bones.</p>
              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Skin Health</p>
                  <p>Skin health is not a gender-restricted concern. But, women are more likely to experience skin-related issues because of the drastic decrease in their collagen levels, especially after menopause. The decreased collagen production results in the skin becoming dryer and thinner. <strong>Collagen supplements for menopause</strong>, overcome such conditions and enhances skin health, as it has moisturizing properties.</p>
                  <p>In addition to this, collagen is also beneficial for women during and after pregnancy. It is because a woman’s body undergoes hormonal changes during and after pregnancy. This softens their collagen fibers, causing the skin to become loose and, in most cases, causing stretch marks.</p>
                  <p>Moreover, it is also effective against UV-Induced photoaging of the skin. According to a study published in the <a href="https://pubmed.ncbi.nlm.nih.gov/29949889/">National Library of Medicine</a>, 64 women who had skin-related issues such as wrinkling, dehydration, and inelasticity took collagen peptides for 12 weeks. Consequently, they experienced considerable improvements.</p>
              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Hair Health</p>
                  <p>Another benefit of consuming collagen-enriched supplements is that it helps women in enhancing their hair health along with improving hair texture. Hairs are primarily composed of keratin, a protein found in collagen. Since keratin production is associated with collagen, consuming collagen eventually helps in rebuilding hair as well as fighting against free radicals, resulting in improved scalp health.</p>

              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Nails Health</p>
                  <p>Aside from the benefits collagen has on a woman’s hair, it has also shown positive results in maintaining nail health. Most women experience broken or chipped nails because of lower collagen levels. According to a study, women who consumed collagen supplies not only showed signs of healthier nails but also reported faster nail growth.</p>

              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Improves Digestive Health</p>
                  <p>Two of the noteworthy amino acids produced by collagen consumption are glutamine and glycine. Glutamine is quite effective when it comes to maintaining digestive health in women as it reduces inflammation of the intestinal wall. In addition to this, glycine is also quite effective when it comes to supporting the stomach lining in females.</p>

              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Collagen Supplements May Improve Muscle Growth</p>
                  <p>According to research, women who were undergoing premenopausal stage and did resistance training for 12 weeks consumed about 15 grams of collagen supplements per day. As a result, they showed significant improvements in their fat-free body mass. Besides this, they also experienced improvements in their leg strength and hand grip.</p>

              </li>

            </ol>
            <h3 style={{fontSize: "26px", fontWeight:"bold"}}>Side Effects Associated With Collagen For Women</h3>
              <p>
              Although collagen supplements are well absorbed, it is always better to practice caution. It is possible to experience mild side effects such as bloating, heartburn, and a feeling of fullness when consuming collagen supplements. Below appended are a few of the side effects women could experience as a result of collagen consumption.
              </p>

              <ol role="list">
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Common Food Allergies</p>
                  <p>To begin with, it should be noted that collagen supplements are primarily made from animal sources, mostly from fish, beef, pork, and chicken skin. Therefore, if you are a vegan, or are allergic to such foods, you should avoid taking collagen supplements. For example, most people are allergic to marine food. So, on consuming collagen supplements, they may experience allergies.</p>
              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Liver Fibrosis</p>
                  <p>Another potential side effect consumption of collage could have is liver fibrosis. The condition primarily occurs as a result of excessive accumulation of proteins, and collagen is one of them. The condition could worsen and turn into cirrhosis or liver failure if not dealt with urgently.</p>
              </li>
              <li>
                  <p style={{fontSize:"22px", fontWeight: 'bold'}}>Digestive System Related Issues</p>
                  <p>Studies indicate that some women may experience mild problems in their digestive system after consuming collagen. Their stomach might become upset, along with experiencing an unpleasant taste in their mouth. This mostly occurs as a result of the additives that are included in the collagen supplements or the brand formula of a particular collagen supplement.</p>
              </li>


            </ol>
            <h4 style={{fontSize:'24px', fontWeight:'bold'}}>Conclusion</h4>
              <p>
              <strong>Collagen benefits for women</strong>are numerous ranging from maintaining hair and nail health to strengthening their bones and joints. However, women might experience some side effects that include allergies, and an upset digestive system. Although these side effects are mild, it is always important to consult a physician before you decide to take collagen supplements.
              </p>

            </div>
          </div>
        </div>
      )
      }

      const BlogSection = (props) => {

      return (
        <>
        <h1 className="mx-1">
                <span className="block text-center text-lg font-semibold text-default">Introducing</span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {post()[0].title}
                </span>
              </h1>
        {
          props.text && props.text.map((data, i) => (
            <>


            {
              data.numTitle !== '' ?
              <ol roll="list">
                <li>
                  <div className="flex items-end space-x-2 text-base font-bold"><span>{data.numTitle}</span><p  style={{fontSize:'22px', fontWeight:'bold'}} >{data.title}</p></div>
                  <p>{data.text}</p>
                </li>
              </ol> :
              <div className='text-lg px-5'>
              <p style={{fontSize:'24px', fontWeight:'bold'}}>
          {data.title}
        </p>
        <p >{data.text}</p>
        </div>
            }
        </>
          ))
        }
        </>
      )
      }

    const Post = () => {

        switch(true) {
            case post()[0] && post()[0].id === 'benefits':
                return <Benefits />
            case post()[0] && post()[0].id === 'curepain':
                return <KneePain />
            case post()[0] && post()[0].id === 'benefitsforhair':
                return <Hair />
            case post()[0] && post()[0].id === 'bestresults':
              console.log('here')
              return <CreateComponent component={BlogSection} data={bestResults} />
            default:
              return <>default</>
        }
    }
    return <Post />
  }