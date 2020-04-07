class Adapter
{
    static getData(url,id='')
    {
        url = id == '' ? url : `${usr}/${id}`;
        return fetch(url).then(res=>res.json())
    }
}