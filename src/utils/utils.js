export const props = {
    attrs: {
      type: Object,
      validator: (value) => {
        return (
          ['appId', 'pageId'].every((k) => value[k]) ||
          console.error(
            'Missing required attrs. Check out `https://cusdis.com/doc#/advanced/sdk`',
          )
        )
      },
    },
    lang: String,
  }
  
  export function resolveProps(props) {
    return {
      ...props,
      attrs: {
        host: 'https://cusdis.com',
        ...props.attrs,
      },
    }
  }
  
  // trying to make them universal
  // cusdis support refresh comment by it self, unload script is uneccessary.
  export function injectScripts(props) {
    return new Promise((resolve, reject) => {
      const tasks = []
      const sdkScript = loadScript(`${props.attrs.host}/js/cusdis.es.js`)
      tasks.push(sdkScript)
  
      if (props.lang) {
        window.CUSDIS_LOCALE = {
            powered_by: 'Commentaires propulsés par Cusdis',
            post_comment: 'Publier un commentaire',
            loading: 'Chargement',
          
            // comment
            email: 'Email (optionnel)',
            nickname: 'Pseudonyme',
            reply_placeholder: 'Commentaire...',
            reply_btn: 'Répondre',
            sending: 'Publication...',
          
            // reply
            mod_badge: 'MOD',
            content_is_required: 'Commentaire requis',
            nickname_is_required: 'Pseudonyme requis',
          
            comment_has_been_sent:
              'Votre commentaire sera ajouté. Merci pour votre commentaire!',
          }
      }
  
      Promise.all(tasks)
        .then(() => resolve())
        .catch(reject)
    })
  }
  
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      let script = document.querySelector(`script[src="${url}"]`)
      if (!script) {
        script = document.createElement('script')
        script.src = url
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.addEventListener('load', () => {
          resolve(script)
        })
        script.addEventListener('error', reject)
        script.addEventListener('abort', reject)
        return
      }
      resolve(script)
    })
  }