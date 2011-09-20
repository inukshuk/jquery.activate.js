describe('$.fn.activate', function () {

	it('should be defined', function () {
		expect($().activate).toBeDefined();
	});
	
	it('should be a function', function () {
		expect($.isFunction($().activate)).toBeTruthy();
	});
	
	describe('$.fn.activate.defaults', function () {
		it('should be defined', function () {
			expect($.fn.activate.defaults).toBeDefined();
		});
	});
	
	describe('given three elements', function () {
		var $$;
		
		beforeEach(function () {
			$$ = $('<div/><div/><div/>').appendTo('body');
		});
		
		afterEach(function () {
			$$.remove();
		});
		
		describe('when called in "once" mode with no callbacks', function () {

			beforeEach(function () {
				$$.activate({ mode: 'once' });
			});
			
			describe('when one of the elements is clicked', function () {
				
				beforeEach(function () {
					click($($$[1]));
				});
				
				it('the element should be active', function () {
					expect($($$[1])).toBeActive();
				});
				
				it('all other elements should be inactive', function () {
					expect($($$[0])).not.toBeActive();
					expect($($$[2])).not.toBeActive();
				});

				describe('when another element is clicked', function () {

					beforeEach(function () {
						click($($$[0]));
					});

					it('the original element should still be active', function () {
						expect($($$[1])).toBeActive();
					});

					it('all other elements should still be inactive', function () {
						expect($($$[0])).not.toBeActive();
						expect($($$[2])).not.toBeActive();
					});

				});
				
			});
		});


		describe('when called in "radio" mode with no callbacks', function () {

			beforeEach(function () {
				$$.activate({ mode: 'radio' });
			});
			
			describe('when one of the elements is clicked', function () {
				
				beforeEach(function () {
					click($($$[1]));
				});
				
				it('the element should be active', function () {
					expect($($$[1])).toBeActive();
				});
				
				it('all other elements should be inactive', function () {
					expect($($$[0])).not.toBeActive();
					expect($($$[2])).not.toBeActive();
				});

				describe('when another element is clicked', function () {

					beforeEach(function () {
						click($($$[0]));
					});

					it('that element should be active', function () {
						expect($($$[0])).toBeActive();
					});

					it('all other elements should be inactive', function () {
						expect($($$[1])).not.toBeActive();
						expect($($$[2])).not.toBeActive();
					});

					describe('when the second element is clicked again', function () {

						beforeEach(function () {
							click($($$[0]));
						});

						it('that element should still be active', function () {
							expect($($$[0])).toBeActive();
						});

						it('all other elements should still be inactive', function () {
							expect($($$[1])).not.toBeActive();
							expect($($$[2])).not.toBeActive();
						});

					});


				});
				
			});
		});


		describe('when called in "toggle" mode with no callbacks', function () {

			beforeEach(function () {
				$$.activate({ mode: 'toggle' });
			});
			
			describe('when one of the elements is clicked', function () {
				
				beforeEach(function () {
					click($($$[1]));
				});
				
				it('the element should be active', function () {
					expect($($$[1])).toBeActive();
				});
				
				it('all other elements should be inactive', function () {
					expect($($$[0])).not.toBeActive();
					expect($($$[2])).not.toBeActive();
				});

				describe('when another element is clicked', function () {

					beforeEach(function () {
						click($($$[0]));
					});

					it('that element should be active', function () {
						expect($($$[0])).toBeActive();
					});

					it('all other elements should be inactive', function () {
						expect($($$[1])).not.toBeActive();
						expect($($$[2])).not.toBeActive();
					});

					describe('when the second element is clicked again', function () {

						beforeEach(function () {
							click($($$[0]));
						});

						it('that element should be inactiveactive', function () {
							expect($($$[0])).not.toBeActive();
						});

						it('all other elements should still be inactive', function () {
							expect($($$[1])).not.toBeActive();
							expect($($$[2])).not.toBeActive();
						});

					});


				});
				
			});
		});



		
	});
});
