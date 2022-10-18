require("./pages/manageBooksPage");
require("./pages/newBookPage");

describe("teched", function () {
	const bookTitle = "How to Cook Pancakes";
	it("create a new book", function () {
    //When.onThe<>Page.iDoAction();
    //Then.onThe<>Page.iShouldSeeSomething();
		When.onTheManageBooksPage.iClickOnCreateNewBook();
		When.onTheManageBooksPage.enterIDNewBook(1);
		When.onTheManageBooksPage.iClickContinueButton();
		When.onTheNewBookPage.iEnterTitle(bookTitle);
		When.onTheNewBookPage.iSelectGenre();
		When.onTheNewBookPage.iSelectAuthor();
		When.onTheNewBookPage.handleSetStock(520);
		When.onTheNewBookPage.handleSetPrice(20);
		When.onTheNewBookPage.iClickOnSaveButton();
		Then.onTheNewBookPage.iSeeEditButton();
  });
	it("should check book is added", function() {
		When.onTheNewBookPage.iNavigateBack();
		Then.onTheManageBooksPage.iSeeGoButton();
		When.onTheManageBooksPage.iClickGoButton();
		Then.onTheManageBooksPage.theBookListContains(bookTitle);
	})
});
