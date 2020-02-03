import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import 'gestalt/dist/gestalt.css';
import {Box, Container} from "gestalt";
import ItemAdd from "./components/irem-add/item-add";
import ItemFilter from "./components/item-filter/item-filter";

class App extends Component {
    max = 100;
    state = {
        data: [
            this.createTodoItem('Go to school'),
            this.createTodoItem('Drive a cat'),
            this.createTodoItem('Go to sleep'),
            this.createTodoItem('Learn react')
        ],
        term:'',
        filter:'all'
    };
    createTodoItem(label){
    return{
        label:label,
        id: this.max++,
        important:false,
        done:false
    }

    }
    filter(items,filter){
        switch (filter) {
            case 'all':return items;
            case 'active':return items.filter((item)=>!item.done);
            case 'done':return items.filter((item)=>item.done)
            default:
                return items;

        }
    }

    deleteClick(id) {
        const {data} = this.state;
        let fIndex = this.state.data.findIndex((fIndex) => fIndex.id === id);
        let newArr = [...data.slice(0, fIndex),
            ...data.slice(fIndex + 1)];
        this.setState({data: newArr});
    }

    addItem = (message) => {
        let newItem = {
            label: message,
            id: this.state.data.length + 1
        };
        this.setState(({data}) => data.push(newItem))
    };
    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el) => el.id === id);
        let oldItem = arr[idx];
        let newItem = {...oldItem,[propName]:!oldItem[propName]};
        return [...arr.slice(0,idx),newItem, ...arr.slice(idx+1)];
    }
    onToggleImportant = (id)=>{
      this.setState(({data})=>{
          return {data:this.toggleProperty(data, id, 'important')}
      })
    };
    onToggleDone=(id)=>{
        this.setState(({data})=>{
            return {data:this.toggleProperty(data,id,'done')}
        })
    };
    searchPanel = (search) => {
    this.setState({term:search});
    };
    search(items,term){
        return items.filter((item)=>{
            return item.label.toLowerCase().includes(term)
        })
    }
    onFilterChange = (filter) =>{
        this.setState({filter})
    };

    render() {
        const {data,term,filter} = this.state;
        const doneCount = data.filter((el) => el.done).length;
        const todoCount = data.length - doneCount;
        const visibleItems = this.filter(this.search(data, term), filter);
       console.log(visibleItems);
        return (
            <Box color={"navy"}
                 height={970}
                 padding={5}
            >
                <Container>
                    <AppHeader todoActive={todoCount} todoDone={doneCount}/>
                    <SearchPanel
                        searchPanel={this.searchPanel.bind(this)}
                    />
                    <ItemFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                    <TodoList
                        todos={visibleItems}
                        onDeleted={(id) => {this.deleteClick.bind(this)}}
                        onToggleImportant ={this.onToggleImportant}
                        onToggleDone = {this.onToggleDone}

                    />
                    <ItemAdd addItem={this.addItem}/>
                </Container>

            </Box>

        )
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));

