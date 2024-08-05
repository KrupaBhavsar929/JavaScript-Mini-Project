


function getSearchValue()
 {
    var data = document.getElementById('inputValue').value;
    console.log(data);
    document.getElementById('lowerCaseId').value = data.toLowerCase();
    document.getElementById('upperCaseId').value = data.toUpperCase();

    function toCamelCase(data) {
        // Convert the string to lowercase and trim extra spaces
        str = data.toLowerCase().trim();
        
        // Split the string by spaces, hyphens, or underscores
        let words = str.split(/[\s-_]+/);
        
        // Capitalize the first letter of each word (except the first word) and concatenate
        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        
        // Join all the words to form a camel case string
        return words.join('');
    }
    function toPascalCase(data) {
        // Convert the string to lowercase and trim extra spaces
        str = data.toLowerCase().trim();
        
        // Split the string by spaces, hyphens, or underscores
        let words = str.split(/[\s-_]+/);
        
        // Capitalize the first letter of each word and concatenate
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        
        // Join all the words to form a Pascal case string
        return words.join('');
    }

    function toSnakeCase(data)
    {
        let words=data.split(/[\s_-]/);
        return words.join('_');
    }

    function toKebabCase(data)
    {
        let words=data.split(/[\s_-]/);
        return words.join('-');
    }
    function toTrim(data)
    {
        data=data.trim();
        data=data.replace(/\s+/g, ' ');
        return data;
    }   

    document.getElementById('camelCaseId').value = toCamelCase(data);
    document.getElementById('pascalCaseId').value = toPascalCase(data);
    document.getElementById('snakeCaseId').value = toSnakeCase(data);
    document.getElementById('kebabCaseId').value = toKebabCase(data);
    document.getElementById('trimCaseId').value = toTrim(data)
    
    
 }


 





