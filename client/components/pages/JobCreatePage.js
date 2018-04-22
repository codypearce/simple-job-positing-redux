import React, { Component } from "react";
import PropTypes from "prop-types";

export default class JobCreatePage extends Component {
    static propTypes = {
        createJob: PropTypes.func.isRequired,
        history: PropTypes.object
    };
    state = {
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
        tag: "",
        tags: []
    };

    async _createJob() {
        const res = await this.props.createJob(this.state);

        if (res) {
            this.props.history.push("/");
        }
    }
    _handleUpdate(e, name) {
        this.setState({
            [name]: e.target.value
        });
    }
    _addTag() {
        const tags = this.state.tags.slice();
        const tag = this.state.tag;
        if (!tag) {
            return;
        }
        if (tags.includes(tag)) {
            return;
        }
        tags.push(tag);
        this.setState({
            tags: tags,
            tag: ""
        });
    }
    _deleteTag(tag) {
        const tags = this.state.tags.slice();
        if (tags.includes(tag)) {
            const newTags = tags.filter(item => item != tag);
            this.setState({
                tags: newTags
            });
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <h3 className="text-center mb-5">Add Job</h3>
                <div className="input-group d-flex flex-column">
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        onChange={e => this._handleUpdate(e, "title")}
                        value={this.state.title}
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        onChange={e => this._handleUpdate(e, "company")}
                        value={this.state.company}
                        type="text"
                        placeholder="Company"
                    />

                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="number"
                        step="1000"
                        min="0"
                        placeholder="Salary"
                        onChange={e => this._handleUpdate(e, "salary")}
                        value={this.state.salary}
                    />
                    <input
                        className="form-control mb-3 w-50 mx-auto"
                        type="text"
                        placeholder="Location"
                        onChange={e => this._handleUpdate(e, "location")}
                        value={this.state.location}
                    />
                    <div className="input-group mb-3  w-50 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tag"
                            aria-label="Tag"
                            aria-describedby="basic-addon2"
                            onChange={e => this._handleUpdate(e, "tag")}
                            value={this.state.tag}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={e => this._addTag()}
                            >
                                Add Tag
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3 w-50 mx-auto">
                        {this.state.tags &&
                            this.state.tags.map(tag => {
                                return (
                                    <span
                                        key={tag}
                                        className="tag"
                                        onClick={e => this._deleteTag(tag)}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="textarea"
                            className="d-block text-center mx-auto"
                        >
                            Description
                        </label>
                        <textarea
                            className="form-control mb-3 w-50 mx-auto"
                            id="textarea"
                            onChange={e => this._handleUpdate(e, "description")}
                            value={this.state.description}
                            rows="3"
                        />
                    </div>
                    <button
                        onClick={() => this._createJob()}
                        className="btn btn-primary w-50 mx-auto"
                    >
                        Add Job
                    </button>
                </div>
            </div>
        );
    }
}
