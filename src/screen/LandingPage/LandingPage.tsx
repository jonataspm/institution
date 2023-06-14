import "./LandingPage.css"

type Props = {}

export const LandingPage = (props: Props) => {
  return (
    <div className="landpage">
    <header>
        Voluntação
    </header>
    <main>
      <section className="introduction">
        <div className="inner_introduction">
          <div>
            <h1>Ajude a comunidade</h1>
            <div>
              <p>Seja um voluntário e faça a diferença na vida de muitas pessoas.</p>
              <p>Junte-se ao Voluntariado hoje mesmo!</p>
            </div>
            <button>Participe</button>
          </div>
        </div>
        
      </section>
      <section className="gallery">
        <div>
          <h1>Gallery</h1>
          <div className="inner_gallery">
            <div>
              <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img1" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sdW50YXJpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sdW50YXJpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img3" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZvbHVudGFyaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img4" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="img5" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img5" />
            </div>
          </div>
        </div>
      </section>
      <div className="feedback">
        <div>
          <p>Voluntação é uma organização incrivel! Eles me ajudaram a encontrar oportunidades de voluntariado na minha área e me conectaram com pessoas incríveis. Obrigada por tornar minha experiência de voluntariado em São Paulo tão enriquecedora!
        <span>- Mariana</span></p>
        </div>
      </div>
      <section className="services">
        <h1>Nossos serviços</h1>
        <div className="inner_services">
          <div>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="group1" />
            <h2>Capacitação</h2>
            <p>Encontre mais voluntáios para sua organização. Nosso serviço personalizado de capacitação vai ajudar você a encontrar engajamento para seu trabalho de voluntariado.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="group2" />
            <h2>Estratégia de comunicação</h2>
            <p>Crie uma presença online que comunique a personalidade da sua organização. Trabalhamos de perto com você para desenvolver uma estratégia de comunicação que capta o coração da sua audiência.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="group3" />
            <h2>Redes sociais</h2>
            <p>Melhore seu engajamento com nossa gestão de profissionais de redes sociais. Junte-se a uma plataforma cada vez mais importante e interaja com seus voluntários e potenciados voluntários.</p>
          </div>
        </div>
      </section>
    </main>
    <section className="about">
      <div>
        <h1>Sobre nós</h1>
        <p>Voluntação é uma organização sem fins lucrativos que conecta voluntários com oportunidades de voluntariado em São Paulo, SP. Nós acreditamos que o voluntariado é uma forma poderosa de criar mudanças positivas na comunidade e mundo</p>
      </div>
    </section>
    </div>
  )
}