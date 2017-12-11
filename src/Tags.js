import Links from './Links';

const Tags = {};

// for student
let links = [];
Links.forEach((element) => {
  if (element.audience === 'students' || element.audience === 'both') {
    links.push(element.text);
    links.push(element.category);
    links.concat(element.tags.split(',').map(e => e.trim()));
  }
});

links = links.map(element => (element.toLowerCase()));
links.sort();
// make it unique
Tags.students = links.filter((element, index) => (
  index === 0 || links[index - 1] !== element
));

// for teacher
links = [];
Links.forEach((element) => {
  if (element.audience === 'adults' || element.audience === 'both') {
    links.push(element.text);
    links.push(element.category);
    links.concat(element.tags.split(',').map(e => e.trim()));
  }
});

links = links.map(element => (element.toLowerCase()));
links.sort();
// make it unique
Tags.adults = links.filter((element, index) => (
  index === 0 || links[index - 1] !== element
));

export default Tags;
