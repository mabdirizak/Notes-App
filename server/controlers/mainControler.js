/**
 * GET Homepage
 */

exports.homepage = async (req, res) => {
          const locals = {
          title: 'NodeJs Notes',
          description: 'Free NodeJs Note taking app'
          }

 res.render('index', {
     locals,
     layout : '../views/layout/front-page'
 }); 
}

/**
 * GET About
 */

exports.about = async (req, res) => {
          const locals = {
          title: 'About - NodeJs Notes',
          description: 'Free NodeJs Note taking app'
          }

 res.render('about', locals); 
}