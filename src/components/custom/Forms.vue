<template lang="html">
  <main>
    <icon-search></icon-search>
    <b-form-group description="Try dates and locations" label="Form input with suggestions">
      <b-form-input placeholder="Search for ..."></b-form-input>
      <div class="suggestions">
        <b-media class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
          <b class="suggestion-title">Search Result Title</b>
          <span class="suggestion-results">
            <b class="txt-clr-accent-secondary">234</b>
            <br>1.676
            <br>
            <b-button size="sm" class="mt-2">+</b-button>
            <b-button size="sm" class="mt-2">R</b-button>
          </span>
          <br>
          <i class="suggestion-context">Context ... Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla ...</i>
          <span class="suggestion-results">
          </span>
        </b-media>
        <b-media left-align vertical-align="center" class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
          <b class="mt-0 mb-1">Search Result Title</b>
          <br>
          <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
          <div class="float-right">
            <b-button size="sm">+</b-button>
            <b-button size="sm">R</b-button>
          </div>
        </b-media>
        <b-media left-align vertical-align="center" class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
          <b class="mt-0 mb-1">Search Result Title</b>
          <br>
          <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
          <div class="float-right">
            <b-button size="sm">+</b-button>
            <b-button size="sm">R</b-button>
          </div>
        </b-media>
      </div>
    </b-form-group>

    <b-card>
      <pre>
        &lt;b-form-group description="Try dates and locations" label="Form input with suggestions"&gt;
          &lt;b-form-input placeholder="Search for ..."&gt;&lt;/b-form-input&gt;
          &lt;div class="suggestions"&gt;
          &lt;b-media class="suggestion"&gt;
            &lt;b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" /&gt;
            &lt;b class="suggestion-title"&gt;Search Result Title&lt;/b&gt;
            &lt;span class="suggestion-results"&gt;
              &lt;b class="txt-clr-accent-secondary"&gt;234&lt;/b&gt;
              &lt;br&gt;1.676
              &lt;br&gt;
              &lt;b-button size="sm" class="mt-2"&gt;+&lt;/b-button&gt;
              &lt;b-button size="sm" class="mt-2"&gt;R&lt;/b-button&gt;
            &lt;/span&gt;
            &lt;br&gt;
            &lt;i class="suggestion-context"&gt;Context ... in gravida nulla ...&lt;/i&gt;
            &lt;span class="suggestion-results"&gt;
            &lt;/span&gt;
          &lt;/b-media&gt;
          &lt;/div&gt;
        &lt;/b-form-group&gt;
      </pre>
    </b-card>
    <br>

    <div class="heading-wrapper">
      <div class="heading-top">Search</div>
      <div class="float-right">
        <b-button size="sm">Refine ...</b-button>
      </div>
    </div>

    <b-card>
      <pre>
        &lt;div class="heading-wrapper">
          &lt;div class="heading-top">Search&lt;/div>
          &lt;div class="float-right">
            &lt;b-button size="sm">Refine ...&lt;/b-button>
          &lt;/div>
        &lt;/div>
      </pre>
    </b-card>
    <br>


    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>

    <label for="basic-url">Your vanity URL</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">Button</button>
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
    </div>


    <div class="heading-wrapper">
      <div class="heading-top">Checkboxes</div>
      <div class="float-right">
        <b-button size="sm">Reset</b-button>
        <b-button size="sm">Refine ...</b-button>
      </div>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
      <label class="form-check-label" for="defaultCheck2">
        Disabled checkbox
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
      <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
      <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
      <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
      <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
      <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
    </div>

    <div class="select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container" aria-expanded="false">
    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        <span class="select-menu-title">Filter by project</span>
      </div>

      <div class="js-select-menu-deferred-content">
<div class="select-menu-filters">
  <div class="select-menu-text-filter">
    <input type="text" id="projects-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter projects" aria-label="Filter projects" autocomplete="off">
  </div>

  <div class="select-menu-tabs">
    <ul>
        <li class="select-menu-tab">
          <button type="button" data-tab-filter="tab-repository" class="select-menu-tab-nav js-select-menu-tab" aria-current="false">Repository</button>
        </li>

        <li class="select-menu-tab">
          <button type="button" data-tab-filter="tab-organization" class="select-menu-tab-nav js-select-menu-tab selected" "="" aria-current="true">Organization</button>
        </li>
    </ul>
  </div>
</div>

  <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket filterable-empty" data-tab-filter="tab-repository">
  <div data-filterable-for="projects-filter-field" data-filterable-type="substring" class="filterable-empty">
  </div>

  <div class="select-menu-no-results">No projects found. Sorry about that.</div>
</div>


  <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected" data-tab-filter="tab-organization">
  <div data-filterable-for="projects-filter-field" data-filterable-type="substring">
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F3" class="select-menu-item js-navigation-item js-navigation-open navigation-focus" aria-selected="true">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">Deploy prototype on dev server</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F2" class="select-menu-item js-navigation-item js-navigation-open" aria-selected="false">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">Integrate Newspapers titles metadata</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F4" class="select-menu-item js-navigation-item js-navigation-open" aria-selected="false">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">Visual experimentations</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F11" class="select-menu-item js-navigation-item js-navigation-open" aria-selected="false">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">db: Data Architecture</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F7" class="select-menu-item js-navigation-item js-navigation-open" aria-selected="false">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">do search</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F14" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Annotation Campaign</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F10" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Named Entities</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F13" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: OCR Correction</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F12" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Shared Task</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F9" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Text Classification</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F15" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Text Reuse</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F8" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">nlp: Topic Modeling</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F5" class="select-menu-item js-navigation-item js-navigation-open">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">visual components</div>
      </a>
      <a href="/impresso/impresso.github.io/issues?q=is%3Aopen+is%3Aissue+project%3Aimpresso%2F6" class="select-menu-item js-navigation-item js-navigation-open last-visible">
        <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
        <div class="select-menu-item-text">vues pages</div>
      </a>
  </div>

  <div class="select-menu-no-results">No projects found. Sorry about that.</div>
</div>

</div>
      <div class="select-menu-loading-overlay anim-pulse">
        <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </div>
    </div>
  </div>

  </main>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
