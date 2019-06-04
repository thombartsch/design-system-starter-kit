(($) => {
  $('.ui.search').search({
    apiSettings: {
      url: '/search?q={query}'
    },
    minCharacters: 1,
    fields: {
      results: 'results'
    },
    selector: {
      prompt: '.search-input'
    },
    templates: {
      standard: (response) => {
        let html = '';
        response.results.forEach((item) => {
          const url = `/shop/${item.category.toLowerCase()}/${item.subcategory}/${item.sku}`;

          html += `
            <li role="presentation">
              <div class="media">
                <div class="media-left">
                  <a href="${url}">
                    <img class="media-object" src="${item.imageUrlThumb}" alt="${item.name}">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                    <a href="${url}">${item.name}</a>
                  </h4>
                  <span class="price">$${item.salePrice}</span>
                </div>
              </div>
            </li>
          `;
        });

        return html;
      }
    }
  });

  $('.search-form').on('click', () => {
    $('.search-form, .search-label, .search-input').addClass('active');
    $('#community, #account').addClass('hidden');
  });

  $(document).on('click', (e) => {
    if (!$(e.target).closest('.search-container').length) {
      $('.search-form, .search-label, .search-input').removeClass('active');
      $('#community, #account').removeClass('hidden');
    }
  });
})(jQuery);
