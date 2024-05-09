=========== saksham ==========================

  // Impact Page Form Style
document.addEventListener('DOMContentLoaded', function(){
  setTimeout( () => {
    let formImpact = document.querySelector('div[data-forms-id="forms-root-103791"] form-embed').shadowRoot;

    let formparent = formImpact.querySelector('._formContainer_whyqz_30._grid_whyqz_145._noImage_whyqz_158');
      formparent.style.maxWidth = '840px';
      formparent.style.minWidth = '280px';
    
    let formImpactInput = formparent.querySelectorAll('form input').forEach( e => {
      e.style.borderRadius = 0;
      e.style.border = '1px solid rgb( 0 65 105 / .12 )';
      e.style.boxShadow = 'none';
      e.style.color = 'rgb( 0 65 105 )'
    })
    let formImpactP = formparent.querySelectorAll('form p').forEach( e => {
      e.style.color = 'rgb( 0 65 105 )'
    })
    let formImpactLabel = formparent.querySelectorAll('form label').forEach( e => {
      e.style.color = 'rgb( 0 65 105 / .5 )'
    })
    
    let formImpactButton = formparent.querySelector('form button[type="submit"]');
      formImpactButton.style.width = 'fit-content';
      formImpactButton.style.padding = '17px 40px';
      formImpactButton.style.borderRadius = '0';
      formImpactButton.style.fontSize = '16px';
      formImpactButton.style.fontWeight = '700';
      formImpactButton.style.lineHeight = '25.6px';
      formImpactButton.style.fontFamily = 'Futura';

    let formImpactSelect = formparent.querySelector('._selectToggle_1yit2_25');
      formImpactSelect.style.borderRadius = '0';
      formImpactSelect.style.border = '1px solid rgb( 0 65 105 / .12 )';
      formImpactSelect.style.color = 'rgb( 0 65 105 )'
      formImpactSelect.style.boxShadow = 'none';

    let formImpactTextArea = formparent.querySelector('textarea');
      formImpactTextArea.style.borderRadius = 0;
      formImpactTextArea.style.border = '1px solid rgb( 0 65 105 / .12 )';
      formImpactTextArea.style.boxShadow = 'none';
      formImpactTextArea.style.color = 'rgb( 0 65 105 )'
    
  }, 2000)
})
