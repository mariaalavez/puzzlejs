describe('LearnJS', function(){
  it('can show a problem view', function(){
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });

  it('shows the landing page view when there is no hash', function(){
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });

  // Assert that router learnjs.showView extracts the view parameter and it
  // passes it to the view function viewFn.
  it('passes the hash view parameter to the view function', function(){
    spyOn(learnjs, 'problemView');//Test interaction bw router & view function
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });

  it('invokes the router when loaded', function(){
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', function(){
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  })

  describe('problem view', function(){
    it('has a title that includes the problem number', function(){
      var view = learnjs.problemView('1');
      expect(view.text()).toEqual('Problem #1 Coming soon!');
    })
  })


});
