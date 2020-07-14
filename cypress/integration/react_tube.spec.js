describe("React tube testing", () => {
  beforeEach(() => {
    cy.server();

    cy.route("GET", "**react-tube/youtube/v3/search**", "fx:data.json").as(
      "getVideos"
    );
  });

  it("Should contain search bar", () => {
    cy.visit("/");

    cy.findByTestId("search-bar-container").should("exist");
  });

  it("Should show loader after user has typed in searchbar", () => {
    cy.visit("/");

    cy.findByTestId("search-bar-container").type("football");

    cy.findByTestId("loader").should("exist");
  });

  it("Should show video detail", () => {
    cy.visit("/");

    cy.findByTestId("search-bar-container").type("football");

    cy.findByTestId("video-detail-container").should("exist");
  });

  it("should show video list items correctly", () => {
    cy.visit("/");

    cy.findByTestId("search-bar-container").type("football");
    cy.wait("@getVideos").then((xhr) => {
      const { items } = xhr.responseBody;

      cy.findAllByTestId("video-list-item-container")
        .should("have.length", items.length)
        .each(($videoListItem, index) => {
          const videoListItem = items[index];

          cy.wrap($videoListItem).within(() => {
            cy.findByRole("img").should(
              "have.attr",
              "src",
              videoListItem.snippet.thumbnails.default.url
            );

            cy.findByText(videoListItem.snippet.title, {
              selector: "p",
            }).should("exist");
          });
        });
    });
  });

  it("should show selected video ", () => {
    cy.visit("/");

    cy.findByTestId("search-bar-container").type("football");

    cy.wait("@getVideos").then((xhr) => {
      const { items } = xhr.responseBody;
      const videoListItem = items[items.length - 1];
      cy.findAllByTestId("video-list-item-container").then(
        ($videoListItemContainer) => {
          $videoListItemContainer[items.length - 1].click();
        }
      );
      cy.findByTestId("video-detail-container")
        .findByText(videoListItem.snippet.title, {
          selector: "div",
        })
        .should("exist");
    });
  });
});
