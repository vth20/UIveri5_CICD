module.exports = createPageObjects({
	ManageBooks: {
		// replace <iDoAction> under actions with the method defined in teched.spec.js
		actions: {
			iClickOnCreateNewBook: function () {
				element(by.control({
					id: "admin::BooksList--fe::table::Books::LineItem::StandardAction::Create",
					interaction: {
						idSuffix: "BDI-content"
					}
				})).click();
			},
			enterIDNewBook: function (id) {
				element(by.control({
					id: "CreateDialog::Books::ID-inner",
					searchOpenDialogs: true,
					interaction: {
						idSuffix: "inner"
					}
				})).sendKeys(id);
			},
			iClickContinueButton: function () {
				element(by.control({
					controlType: "sap.m.Button",
					viewId: "admin::BooksList",
					properties: {
						text: "Continue"
					},
					searchOpenDialogs: true,
					interaction: {
						idSuffix: "BDI-content"
					}
				})).click();
			},
			iClickGoButton: function () {
				element(by.control({
					id: "admin::BooksList--fe::FilterBar::Books-btnSearch",
					interaction: {
						idSuffix: "BDI-content"
					}
				})).click();
			}
		},

		assertions: {
			theBookListContains: function(sBook) {
				let book = element(by.control({
					controlType: "sap.m.Text",
					viewId: "admin::BooksList",
					properties: {
						text: sBook
					}
				}));
				expect(book.isPresent()).toBeTruthy();
			},
			iSeeGoButton: function() {
				let GoButton = element(by.control({
					id: "admin::BooksList--fe::FilterBar::Books-btnSearch",
					interaction: {
						idSuffix: "BDI-content"
					}
				}));
				expect(GoButton.isPresent()).toBeTruthy();
			}
		},
	},
});
