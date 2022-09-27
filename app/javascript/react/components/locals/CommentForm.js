import _ from "lodash"
import ErrorList from "../Errors/ErrorList"
import React, { useState } from "react"

const CommentForm = (props) => {
    const [errors, setErrors] = useState({})
    const [newComment, setNewComment] = useState ({
        body: ""
      })
    
    const postComment = async (formData) =>{
        try {
            const response = await fetch(`/api/v1/locals/${props.local.id}/comments`, {
            credentials: "same-origin",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({comment: formData})
            })
            if (!response.ok) {
            const errorMessage = `${response.status} (${response.status.text})`
            const error = new Error(errorMessage)
            throw(error)
            }
            const commentData = await response.json()

            if (commentData.comment) {
            appendNewComment(commentData.comment)
            } else if (commentData.error) {
            setErrors({'error: ': commentData.error})
            }

        } catch(error) {
            console.log(`Error in fetch: ${error}`)
        }
    }
    
    const handleChange = (event) => {
        setNewComment ({
            ...newComment,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    const validForSubmission = () => {
        let submitErrors = {}
        const requiredFields = ["body"]
        requiredFields.forEach(field => {
            if (newComment[field].trim() == "") {
            submitErrors = {
                ...submitErrors,
                [field]: "cannot be blank"
            }
            }
        })
        if (_.isEmpty(submitErrors)) {
            return true
        } 
        setErrors(submitErrors)
        return false
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        if (validForSubmission()) {
            postComment(newComment)
            setNewComment ({
            body:""
            })
        }
    }
    
    const appendNewComment = (commentPayload) => {
        const newComments = props.local.comments
        newComments.push(commentPayload)
        props.setLocal({
            ...props.local,
            comments: newComments
        })
        props.setForm(false)
        }

        const closeForm = () => {
        props.setForm(false)
    }


    return ( 
        <div>
            <form className="callout" onSubmit={handleFormSubmit}>
                    <ErrorList
                        errors={errors}
                    />
                    <label> Comment:
                        <input
                            rows={4}
                            cols={50} 
                            name="body"
                            id="body"
                            type="text"
                            onChange={handleChange}
                            value={newComment.body}
                        />
                        </label>
                    <div className="button-group">
                        <input className="button success" type="submit" value="Post Comment" />
                    </div>
            </form>
        </div>
     );
}
 
export default CommentForm;