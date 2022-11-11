const articlesStub = {
  results: [
    {
      section: "movies",
      subsection: "",
      title: "‘The Fabelmans’ Review: Spielberg’s Own Sentimental Education",
      abstract: "The director’s latest movie focuses on a budding filmmaker a lot like himself. But Michelle Williams, as his mother, is the soul of this fractious family drama.",
      url: "https://www.nytimes.com/2022/11/10/movies/the-fabelmans-review-spielberg.html",
      byline: "By Manohla Dargis",
      updated_date: "2022-11-10T12:51:27-05:00",
      published_date: "2022-11-10T09:47:35-05:00",
      multimedia: [
        {
          url: 'https://static01.nyt.com/images/2022/11/11/arts/11…bceb56-f202-44dc-9ca1-9a54a58bbfe0-superJumbo.jpg'
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/11/arts/11…02-44dc-9ca1-9a54a58bbfe0-threeByTwoSmallAt2X.jpg'
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/11/arts/11…bceb56-f202-44dc-9ca1-9a54a58bbfe0-thumbLarge.jpg'
        },
      ],
    },
    {
      section: "arts",
      subsection: "television",
      title: "In ‘Tulsa King,’ Sylvester Stallone Tries Something New: Being Himself",
      abstract: "His best-known characters often speak in grunts. But in a new series from Taylor Sheridan, he plays a smooth talker written with his real personality in mind.",
      url: "https://www.nytimes.com/2022/11/10/arts/television/tulsa-king-sylvester-stallone.html",
      byline: "By Austin Considine",
      updated_date: "2022-11-10T12:19:31-05:00",
      published_date: "2022-11-10T05:00:15-05:00",
      multimedia: [
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13…6173e9-1afd-4ba7-b0bd-a9fa13c2b5d6-superJumbo.jpg'
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13stallone4/13stallone4-threeByTwoSmallAt2X.jpg'
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13stallone4/13stallone4-thumbLarge.jpg'
        },
      ],
    },
    {
      section: "arts",
      subsection: "television",
      title: "This Land Is His Land",
      abstract: "It’s too simplistic to label “Yellowstone” a “red-state drama.” But the cowboy soap speaks the language of culture war with a perfect accent.",
      url: "https://www.nytimes.com/2022/11/10/arts/television/yellowstone-taylor-sheridan.html",
      byline: "By James Poniewozik",
      updated_date: "2022-11-10T05:02:38-05:00",
      published_date: "2022-11-09T13:58:51-05:00",
      multimedia: [
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ne-notebook/13yellowstone-notebook-superJumbo.jpg',
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ok/13yellowstone-notebook-threeByTwoSmallAt2X.jpg',
        },
        {
          url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ne-notebook/13yellowstone-notebook-thumbLarge.jpg',
        },
      ],
    },
  ]
};

const artsStub = {
  results: [{
    section: "arts",
    subsection: "television",
    title: "In ‘Tulsa King,’ Sylvester Stallone Tries Something New: Being Himself",
    abstract: "His best-known characters often speak in grunts. But in a new series from Taylor Sheridan, he plays a smooth talker written with his real personality in mind.",
    url: "https://www.nytimes.com/2022/11/10/arts/television/tulsa-king-sylvester-stallone.html",
    byline: "By Austin Considine",
    updated_date: "2022-11-10T12:19:31-05:00",
    published_date: "2022-11-10T05:00:15-05:00",
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13…6173e9-1afd-4ba7-b0bd-a9fa13c2b5d6-superJumbo.jpg'
      },
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13stallone4/13stallone4-threeByTwoSmallAt2X.jpg'
      },
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13stallone4/13stallone4-thumbLarge.jpg'
      },
    ],
  },
  {
    section: "arts",
    subsection: "television",
    title: "This Land Is His Land",
    abstract: "It’s too simplistic to label “Yellowstone” a “red-state drama.” But the cowboy soap speaks the language of culture war with a perfect accent.",
    url: "https://www.nytimes.com/2022/11/10/arts/television/yellowstone-taylor-sheridan.html",
    byline: "By James Poniewozik",
    updated_date: "2022-11-10T05:02:38-05:00",
    published_date: "2022-11-09T13:58:51-05:00",
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ne-notebook/13yellowstone-notebook-superJumbo.jpg',
      },
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ok/13yellowstone-notebook-threeByTwoSmallAt2X.jpg',
      },
      {
        url: 'https://static01.nyt.com/images/2022/11/13/arts/13…ne-notebook/13yellowstone-notebook-thumbLarge.jpg',
      },
    ],
  },
  ],
};

describe('App', () => {
  beforeEach(() => {
    cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/${articlesStub.section}.json?api-key=${process.env.REACT_APP_API_KEY}`, articlesStub)
    cy.visit('http://localhost:3000/')
  });

  it('user should see a header, dropdown menu, and home section articles on pageload', () => {
    cy.get('.App').within(() => {
      cy.get('.header').contains('NY Times News Reader')
        .get('form').within(() => {
          cy.get('.search-form').should('exist').and('be.visible')
        })
      cy.get('.article-cards-container > :nth-child(1)').should('exist').and('be.visible')
      cy.get('.article-cards-container > :nth-child(38)').should('exist').and('be.visible')
    })
  });

  it('user should see a list of articles, each with a title, byline, and link to view more', () => {
    cy.get('.article-cards-container > :nth-child(1) > .article-title').should('be.visible')
      .get('.article-byline').contains('By Manohla Dargis')
      .get('.view-more-link').should('be.visible')
  })

  it('user should be able to choose a different section of articles to view', () => {
    cy.intercept("GET", `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`, artsStub)
    cy.visit('http://localhost:3000')
    cy.get('select').first().select('arts')
    cy.get('.article-cards-container > :nth-child(1) > .article-title').should('be.visible')
      .get('.article-byline').contains('By Austin Considine')
      .get('.view-more-link').should('be.visible')
  })
});